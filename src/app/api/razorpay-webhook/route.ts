import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    
    // Instantiate elevated back-channel client bypassing row rules
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://scaleoptimus.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || 'sb_secret_1qbUxNGSV6qKmYc2Ll-ieg_1PCKgHzk'
    );

    const event = payload.event;
    if (event === 'payment.captured') {
      const email = payload.payload.payment.entity.email;
      
      // Upgrade accounting allocation permissions tier status automatically
      await supabaseAdmin
        .from('profiles')
        .update({ subscription_tier: 'pro' })
        .eq('email', email);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
