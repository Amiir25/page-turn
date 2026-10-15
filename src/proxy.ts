import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    console.log("proxy saw: ", request.nextUrl.pathname);
    return NextResponse.next();
}

export const config = {
    matcher: ["/reading-list/:path*", "/account/:path*", "/login", "/signup"],
}