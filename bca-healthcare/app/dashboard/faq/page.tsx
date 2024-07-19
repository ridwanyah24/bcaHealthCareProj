import Faq from "@/app/ui/faq";
import Footer from "@/app/ui/footer";
import Nav from "@/app/ui/nav";


export default function Page(){
    return (
        <div>
            <Nav/>
            <span className="min-h-screen"><Faq/></span>
           <Footer/>
        </div>
    )
}