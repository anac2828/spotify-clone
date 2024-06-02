// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
// import { NextRequest, NextResponse } from 'next/server';

// // use this to autheticate users to display list of songs on sidebar that were uploaded by user
// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const supabase = createMiddlewareClient({ req, res });

//   await supabase.auth.getUser();
//   console.log(res);
//   return res;
// }

// import { NextResponse, NextRequest } from 'next/server';
// import createSupabaseSession from './utils/middleware';

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();

//   const supabase = createSupabaseSession(req, res);

//   return res;
// }

import { NextResponse, NextRequest } from 'next/server';
import createSupabaseSession from './utils/middleware';

export async function middleware(req: NextRequest, res: NextResponse) {
  const response = await createSupabaseSession(req, res);

  return response;
}
