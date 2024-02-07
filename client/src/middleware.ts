import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
	console.log(req);
	const token = await getToken({ req });
	const isAuthenticated = !!token;
	const currentPath = req.nextUrl.pathname;

	if (currentPath.startsWith('/signin') || currentPath.startsWith('/signup')) {
		if (isAuthenticated) return NextResponse.redirect(new URL('/categories', req.url));
	}

	if (currentPath.startsWith('/dashboard')) {
		if (!isAuthenticated) return NextResponse.redirect(new URL('/signin', req.url));
	}

	return NextResponse.next();
}

export const config = { matcher: ['/dashboard', '/signin', '/signup'] };
