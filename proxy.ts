import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const pathName = request.nextUrl.pathname;

    if (pathName.startsWith('/application') && !process.env.NEXT_PUBLIC_BYPASS_REGISTER_TIME) {
        const startTime = new Date('2026-02-23T00:00:01+07:00').getTime();
        const endTime = new Date('2026-03-10T23:59:59+07:00').getTime();
        const now = Date.now();

        if (now < startTime || now > endTime) {
            return NextResponse.rewrite(new URL('/404', request.url));
        }
    }

    return NextResponse.next();
}