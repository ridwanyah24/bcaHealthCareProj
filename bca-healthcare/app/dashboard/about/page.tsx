import AboutUs from "@/app/ui/dashboard/about/about";
import Footer from "@/app/ui/footer";
import Nav from "@/app/ui/nav";

export default function Page(){ 
    return (
    <div>
        <Nav/>
        <span className="min-h-screen">
            <AboutUs/>
        </span>
        <Footer />
    </div>
    )

}