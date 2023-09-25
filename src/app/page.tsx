"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return(
          <pre>Loading...</pre>
        )
    }

    if (session) {
        return(
            <div>
              <Image src={session.user?.image as string} alt="google profile" height={100} width={100}/>
              <h1>Welcome {session.user?.name}!</h1>
              <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }

    return (
        <div>
          <h1>You need to login to access this page :/</h1>
          <button onClick={() => signIn()}>Sign In</button>
        </div>
    )
}