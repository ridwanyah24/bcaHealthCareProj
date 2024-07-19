import Footer from "@/app/ui/footer";
import ContactUsForm from "@/app/ui/healthcare/contact";
import Nav from "@/app/ui/nav";



export default function Page(){
    return (
        <div>
            <Nav/>
            <span className="min-h-screen"><ContactUsForm/></span>
            <Footer/>
        </div>
    )
}