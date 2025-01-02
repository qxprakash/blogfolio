import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only run middleware for blog routes
  if (request.nextUrl.pathname.startsWith("/blog")) {
    const response = NextResponse.next();

    // Add cache headers
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    // Add security headers
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/blog/:path*",
};
