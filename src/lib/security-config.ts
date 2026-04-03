export const securityHeaders = {
  strictTransportSecurity: "max-age=63072000; includeSubDomains; preload",
  xContentTypeOptions: "nosniff",
  referrerPolicy: "strict-origin-when-cross-origin",
  xFrameOptions: "DENY",
  permissionsPolicy:
    "camera=(), microphone=(), geolocation=(), browsing-topics=()",
} as const;

export const cspDirectives: Record<string, string[]> = {
  "default-src": ["'self'"],
  "script-src": ["'self'", "'strict-dynamic'"],
  "style-src": ["'self'", "'unsafe-inline'"],
  "img-src": ["'self'", "blob:", "data:"],
  "font-src": ["'self'"],
  "connect-src": ["'self'"],
  "object-src": ["'none'"],
  "base-uri": ["'self'"],
  "form-action": ["'self'"],
  "frame-ancestors": ["'none'"],
  "upgrade-insecure-requests": [],
};

/**
 * Builds a CSP header string from the directives map,
 * injecting a nonce into script-src when provided.
 */
export function buildCspHeader(nonce?: string): string {
  const entries = Object.entries(cspDirectives).map(([key, values]) => {
    const v = [...values];
    if (nonce && key === "script-src") {
      v.push(`'nonce-${nonce}'`);
    }
    return v.length > 0 ? `${key} ${v.join(" ")}` : key;
  });
  return entries.join("; ");
}
