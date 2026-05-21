import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) return NextResponse.json({ error: 'Identity verification required.' }, { status: 401 });

  const userId = session.user.id;
  const { type, inputs } = await req.json();

  // Rate Limiting Evaluation Rules
  const today = new Date().toISOString().split('T')[0];
  const { data: prof } = await supabase.from('profiles').select('subscription_tier').eq('id', userId).single();

  if (prof?.subscription_tier === 'free') {
    const { data: log } = await supabase.from('usage_logs').select('calculation_count').eq('user_id', userId).eq('action_date', today).single();
    if (log && log.calculation_count >= 5) {
      return NextResponse.json({ error: 'Sandbox quota tier exceeded. Upgrade framework access levels via the licensing panel.' }, { status: 429 });
    }
  }

  // Exact Algorithmic Calculations Engine
  let outputs: any = {};
  if (type === 'profit-margin') {
    const r = Number(inputs.revenue) || 0;
    const c = Number(inputs.cost) || 0;
    outputs = { profit: r - c, margin: r > 0 ? Math.round(((r - c) / r) * 10000) / 100 : 0 };
  } else if (type === 'pricing') {
    const c = Number(inputs.cost) || 0;
    const m = Number(inputs.margin) || 0;
    outputs = { suggestedPrice: m < 100 ? Math.round((c / (1 - m / 100)) * 100) / 100 : c };
  } else if (type === 'break-even') {
    const fc = Number(inputs.fixedCost) || 0;
    const p = Number(inputs.price) || 0;
    const vc = Number(inputs.variableCost) || 0;
    outputs = { units: p > vc ? Math.ceil(fc / (p - vc)) : 'Infinite bounds' };
  } else if (type === 'freelancer-rate') {
    const ig = Number(inputs.incomeGoal) || 0;
    const h = Number(inputs.hours) || 1;
    outputs = { rate: Math.round((ig / h) * 100) / 100 };
  } else if (type === 'roi') {
    const i = Number(inputs.investment) || 1;
    const r = Number(inputs.returnAmount) || 0;
    outputs = { roi: Math.round(((r - i) / i) * 10000) / 100 };
  } else if (type === 'growth') {
    const cr = Number(inputs.currentRev) || 1;
    const tr = Number(inputs.targetRev) || 0;
    const m = Number(inputs.months) || 1;
    outputs = { requiredGrowthRate: tr > cr ? Math.round((Math.pow(tr / cr, 1 / m) - 1) * 10000) / 100 : 0 };
  }

  const { data: record, error } = await supabase.from('calculations').insert({
    user_id: userId, calculator_type: type, inputs, outputs
  }).select().single();

  // Increment Local Telemetry Count via upsert procedure
  await supabase.from('usage_logs').upsert({ user_id: userId, action_date: today, calculation_count: 1 }, { onConflict: 'user_id,action_date' });

  return NextResponse.json({ success: true, data: record });
}
