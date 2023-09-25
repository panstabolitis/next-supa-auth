"use client";
import { supabase } from "@/lib/useClient";
import { useEffect, useState } from "react"

export function Profile() {
    const [user, setUser] = useState<any>();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then( (value) => {
                if (value.data?.user) {
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            });
        }
        getUserData();
    }, [])

    return(
        <pre>{JSON.stringify(user, null, 2)}</pre>
    )
}