import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Elevated instance leveraging service key mechanics to provision accounts
export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();
    
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://scaleoptimus.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || 'sb_secret_1qbUxNGSV6qKmYc2Ll-ieg_1PCKgHzk',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { data: userAuth, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: name }
    });

    if (authError) return NextResponse.json({ success: false, error: authError.message }, { status: 400 });

    return NextResponse.json({ success: true, data: userAuth });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
