import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from './lib/core/session'


export async function proxy(request: NextRequest) {

    const user = await getSession();
    if (!user) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
    matcher: ['/xxx/:path*', '/analysis/add', '/analysis/manage']
}