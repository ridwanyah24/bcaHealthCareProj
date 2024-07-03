
import Nav from "./ui/nav";
import Dash from "./ui/dashboard/landing/dash";
import Footer from "./ui/footer";



export default function Home() {
  return (
    <div>
      <Nav/>
      <span className="min-h-screen"><Dash/></span>
      <Footer />
    </div>
  );
}
