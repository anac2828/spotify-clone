import { getCookie, setCookie } from 'cookies-next';
import { createServerClient } from '@supabase/ssr';
import { NextRequest, NextResponse } from 'next/server';

// function createSupabaseSession(req: NextRequest, res: NextResponse) {
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         get(name) {
//           return getCookie(name, { req, res });
//         },
//         set(name, value, options) {
//           setCookie(name, value, { req, res, ...options });
//         },
//         remove(name, options) {
//           setCookie(name, 'value', { req, res, ...options });
//         },
//       },
//     }
//   );
// }

async function createSupabaseSession(req: NextRequest, res: NextResponse) {
  let response = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return getCookie(name, { req, res });
        },
        set(name, value, options) {
          setCookie(name, value, { req, res, ...options });
        },
        remove(name, options) {
          setCookie(name, 'value', { req, res, ...options });
        },
      },
    }
  );

  const user = await supabase.auth.getUser();

  return response;
}

export default createSupabaseSession;
