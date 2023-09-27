"use client";
import { supabase } from "@/lib/useClient";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Profile() {
    const [user, setUser] = useState<any>();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then( (value) => {
                if (value.data?.user) {
                    setUser(value.data.user);
                }
            });
        }
        getUserData();
    }, []);

    async function signOut() {
        try {
            console.log("Signing out...");
            await supabase.auth.signOut();
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    async function signInWithGoogle() {
        await supabase.auth.signInWithOAuth({
            provider: 'google'
        });
    }

    if (!user) {
        return(
            <div className="page-wrapper">
                <button onClick={() => {signInWithGoogle()}} className="btn logIn-btn ">
                    <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"} alt="google" width={24} height={24}/>
                    Sign in with Google
                    </button>
            </div>
        )
    }

    return(
        <div className="page-wrapper">
            <div className="box">
                <div className="box-content">
                    <Image src={user.user_metadata.avatar_url} alt="pfp image" height={100} width={100} style={{ borderRadius: "50%"}} />
                    <div className="box-user-meta">
                        <span>Hey 👋</span>
                        <h1>{user.user_metadata.name}</h1>
                    </div>
                </div>
                <button onClick={() => {signOut()}} className="btn">Sign Out</button>
            </div>
        </div>
    )
}