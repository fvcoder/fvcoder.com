import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest): NextResponse {
  const header = new Headers(request.headers);
  header.set('X-Url', request.nextUrl.pathname);

  const response = NextResponse.next({
    request: {
      headers: header,
    },
  });

  return response;
}
