import Dash from "@/app/ui/dashboard/landing/dash";
import Footer from "@/app/ui/footer";
import Nav from "@/app/ui/nav";
import Nav2 from "@/app/ui/nav2";
import { useSession } from "next-auth/react";


export default function Page(){
    // const {data: session} = useSession();

    return (
        <div>
            {/* {session ? <Nav2/> : <Nav />} */}
            <Nav2/>
            <span className="min-h-screen"><Dash/></span>
            <Footer/>
        </div>
    )
}