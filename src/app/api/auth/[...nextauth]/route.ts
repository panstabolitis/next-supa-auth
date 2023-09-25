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
    }) as Adapter,
    callbacks: {
        async session({ session, user }) {
          const signingSecret = process.env.SUPABASE_JWT_SECRET
          if (signingSecret) {
            const payload = {
              aud: "authenticated",
              exp: Math.floor(new Date(session.expires).getTime() / 1000),
              sub: user.id,
              email: user.email,
              role: "authenticated",
            }
            session.supabaseAccessToken = jwt.sign(payload, signingSecret)
          }
          return session
        },
    }
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
