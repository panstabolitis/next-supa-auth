import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { SupabaseAdapter } from "@auth/supabase-adapter"
import { NextAuthOptions } from "next-auth";

import jwt from "jsonwebtoken";
import { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""
    }) as Adapter
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
