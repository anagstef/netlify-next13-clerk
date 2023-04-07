import { getAuth, withClerkMiddleware } from "@clerk/nextjs/server";
import { MiddlewareRequest, MiddlewareResponse } from "@netlify/next";
import { NextRequest, NextResponse } from 'next/server'

// export default withClerkMiddleware((req: NextRequest) => {
//     console.log('Middleware running');
//     const request = new MiddlewareRequest(req as any);
//     return request.next();
// });

// // Stop Middleware running on static files
// export const config = { matcher: '/((?!_next/image|_next/static|favicon.ico).*)' };

// export async function middleware(nextRequest: NextRequest) {
//     console.log('Middleware running');
//     const request = new MiddlewareRequest(nextRequest as any);
//     return MiddlewareResponse.next();
// }

export default withClerkMiddleware((req: NextRequest) => {
    console.log('Middleware running');
    const { userId } = getAuth(req);
    console.log('Middleware userId', userId);
    return NextResponse.next();
});