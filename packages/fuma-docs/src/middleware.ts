import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  try {
    const headers = new Headers(request.headers);
    const pathname = request.nextUrl.pathname || "/";
    headers.set("x-current-path", pathname);
    return NextResponse.next({ headers });
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
