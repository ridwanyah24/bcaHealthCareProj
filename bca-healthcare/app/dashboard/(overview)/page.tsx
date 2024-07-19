import Dash from "@/app/ui/dashboard/landing/dash";
import ServiceList from "@/app/ui/dashboard/landing/serviceList";
// import ServiceCard from "@/app/ui/dashboard/landing/servicesCard";
import Footer from "@/app/ui/footer";
import Nav from "@/app/ui/nav";
// import { useSession } from "next-auth/react";


export default function Page(){
    // const {data: session} = useSession();

    return (
        <div>
            <Nav/>
            <span className=" bg-gray-100">
                <Dash/>
                {/* <ServiceList/> */}
            </span>
            <Footer/>
        </div>
    )
}