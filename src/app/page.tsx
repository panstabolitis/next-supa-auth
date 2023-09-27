import { SignInBtn, SignOutBtn } from "@/components/LogButtons";
import { Profile } from "@/components/Profile";


const revalidate = 60;

export default function Home() {

  return(
    <>
      <Profile />
    </>
  )
}