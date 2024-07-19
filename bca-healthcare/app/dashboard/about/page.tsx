import AboutUs from "@/app/ui/dashboard/about/about";
import ServiceCard from "@/app/ui/dashboard/landing/servicesCard";
import Footer from "@/app/ui/footer";
import Nav from "@/app/ui/nav";
// import { checkApi } from "@/app/lib/data";

export default function Page(){     
    return (
    <div>
        <Nav/>
        <span className="bg-gray-100">
            <AboutUs/>
        </span>
        <Footer />
    </div>
    )

}