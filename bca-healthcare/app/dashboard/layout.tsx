import type { Metadata } from "next";
import { Inter, Lusitana } from "next/font/google";
import "../globals.css";
import Footer from "../ui/footer";
import Nav from "../ui/nav";

const inter = Inter({ subsets: ["latin"] });
const lusitana = Lusitana({subsets:["latin"], weight:"400"})

export const metadata: Metadata = {
  title: "BCA HealthCare",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <div className={`${lusitana.className}`}>
        <span className="bg-gray-100 ">{children}</span>
      </div>      
  );
}
