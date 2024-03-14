import { Session } from 'next-auth';

declare module 'next-auth' {
    interface user {

        firstname: string | null;
        lastname: string | null;
    }

    interface Session {
        user: any;
    }
}