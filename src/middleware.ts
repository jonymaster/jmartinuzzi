import { NextRequest, NextResponse } from "next/server";
import { buildCspHeader, securityHeaders } from "@/lib/security-config";

export function middleware(request: NextRequest) {
  const csp = buildCspHeader();

  const response = NextResponse.next({ request });

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set(
    "Strict-Transport-Security",
    securityHeaders.strictTransportSecurity,
  );
  response.headers.set(
    "X-Content-Type-Options",
    securityHeaders.xContentTypeOptions,
  );
  response.headers.set("Referrer-Policy", securityHeaders.referrerPolicy);
  response.headers.set("X-Frame-Options", securityHeaders.xFrameOptions);
  response.headers.set(
    "Permissions-Policy",
    securityHeaders.permissionsPolicy,
  );

  return response;
}

export const config = {
  matcher: [
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
