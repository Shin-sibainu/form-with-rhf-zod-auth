import { NextRequest } from "next/server";
import { supabase } from "./app/features/lib/supabaseClient";

//https://supabase.com/docs/guides/auth/server-side/nextjs?router=app

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname);
}

export const config = {
  matcher: ["/post/:path*"],
};
