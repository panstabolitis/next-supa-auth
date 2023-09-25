"use client";
import { signIn, signOut } from "next-auth/react";

export function SignOutBtn() {
    return( 
        <button onClick={() => signOut()}>Sign Out</button>
    )
}

export function SignInBtn() {
    return( 
        <button onClick={() => signIn()}>Sign In</button>
    )
}