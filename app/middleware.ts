import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme")?.value;

    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }


    // return NextResponse.redirect(new URL("/", request.url));

    // if (request.nextUrl.pathname === "/profile") {
    //     return NextResponse.redirect(new URL("/", request.url));
    // }

    return response;
}

export const config = {
    matcher: "/profile",
};