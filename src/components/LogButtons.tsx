
"use client";
import { signInWithGoogle, signOut } from "@/hooks/Log";

export function SignOutBtn() {  
    return( 
        <button onClick={() => {signOut()}}>Sign out from Google</button>
    )
}

export function SignInBtn() {
    return( 
        <button onClick={() => {signInWithGoogle()}}>Sign in with Google</button>
    )
}