import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
	interface Session {
		id: string;
		email: string;
		username: string;
		role: string;
	}

	interface User {
		id: string;
		email: string;
		username: string;
		role: string;
	}
}
declare module 'next-auth/jwt' {
	interface JWT {
		id: string;
		email: string;
		username: string;
		role: string;
	}
}
