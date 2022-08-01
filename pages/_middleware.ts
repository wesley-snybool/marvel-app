import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const { origin, pathname, searchParams } = req.nextUrl;

  const urlDest = '/login'
  const userLogeed = searchParams
  const privatePaths = ['/', '/dashboard']
  const publicPaths = ['/', '/about']


  if (!userLogeed && privatePaths.includes(pathname)) {
    return NextResponse.redirect(`${origin}${urlDest}`);
  }
  return NextResponse.next();
}