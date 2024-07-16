
export { default } from 'next-auth/middleware'
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
 
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/signin') || pathname.startsWith('/signup')) {
    if (token) {
      // user is logged in, redirect home
      return NextResponse.redirect(new URL('/', req.url));
    }
  } else if (pathname.startsWith('/signout')) {
    if (!token) {
      // user isn't logged in, redirect signin opage
      return NextResponse.redirect(new URL('/signin', req.url));
    }
  }


  return NextResponse.next();

}

export const config = {
  matcher: ['/user/:path*','/signin', '/signup', '/signout']
}
