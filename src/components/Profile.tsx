"use client";
import { supabase } from "@/lib/useClient";
import { useEffect, useState } from "react";
import { SignInBtn, SignOutBtn } from "./LogButtons";
import { redirect } from 'next/navigation';
import { getSession } from "next-auth/react";

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
        async function getUserSession() {
            await supabase.auth.getSession().then( (session) => {
                console.log(session);
            });
        }
        getUserSession();
    }, []);

    if (!user) {
        <pre>Fetching...</pre>
    }

    return(
        <div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <SignOutBtn />
        </div>
    )
}