import { lusitana, inter } from "@/app/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {

    console.log("yess");
    
    return (
        <div className={`${lusitana.className} grid lg:w-4/5 xl:w-3/5 lg:mx-auto lg:justify-center`}>
            <div className="flex flex-col lg:flex-row my-15 p-10 lg:justify-center">
                <div className="my-20 lg:w-1/2 text-justify p-4">
                    <h1 className="text-4xl font-bold pb-4">About Us</h1>
                    <p className="text-xl text-gray-500">
                        Benson Coleman Healthcare is a sister company coined out of Benson Coleman & Associates (BCA) Limited, founded in 2019. 
                        It is a registered Nigerian company, with the Corporate Affairs Commission (RC 1608214) as a management consultancy firm 
                        in healthcare services and project management, as well as financial and investment advisory services. 
                        We boast an encyclopedic knowledge of Nigeria’s healthcare terrain and have nurtured valuable global partnerships in the US, 
                        Europe, Asia, and the Middle East.
                    </p>
                </div>
                <div className="lg:w-1/2 lg:flex lg:justify-center">
                    <Image src="/owner.png" alt="owner image" width={500} height={300} className="hidden xl:block" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row p-10 border-cyan-500">
                <div className="grid gap-2 lg:w-1/2">
                    <h3 className="uppercase font-bold border-l-4 border-cyan-500 text-xl p-2">Our Vision</h3>
                    <p className="text-justify text-gray-500 lg:text-xl">To be the one-stop shop for healthcare services, globally.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row p-10 border-cyan-500">
                <div className="lg:w-1/2 lg:block hidden"></div>
                <div className="grid gap-2 lg:w-1/2">
                    <h3 className="uppercase font-bold border-l-4 border-cyan-500 text-xl p-2">Our Mission</h3>
                    <p className="text-justify text-gray-500 lg:text-xl">To add value to lives through digital accessibility of healthcare services.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row p-10 border-cyan-500">
                <div className="grid gap-2 lg:w-1/2">
                    <h3 className="uppercase font-bold border-l-4 border-cyan-500 text-xl p-2">BCA Healthcare Network</h3>
                    <p className="text-justify text-gray-500 lg:text-xl">
                        The Benson Coleman & Associates Healthcare Network is an integrated business platform of healthcare service providers, 
                        medical devices vendors, and financial services operators in Nigeria. Benson Coleman & Associates Ltd provides the administrative 
                        base for the network operations. Each business enterprise in the network is an autonomous and independent entity in all aspects 
                        of its operations, but members are at liberty to enact business-to-business relationships as they may desire. Membership of the 
                        network is at all times voluntary and shall have no austere consequences at exit except for the healthcare businesses that are 
                        directly managed by Benson Coleman & Associates Ltd, which are governed by additional contractual agreements. Membership of the 
                        BCA Network shall be a continuum except where a network member or BCA Ltd decides to terminate the membership based on mutual consent.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row p-10 border-cyan-500">
            <div className="lg:w-1/2 lg:block hidden"></div>
                <div className="grid gap-2 lg:w-1/2">
                    <h3 className="capitalize font-bold border-l-4 border-cyan-500 text-xl p-2">Members&apos; benefit and Privileges</h3>
                    <ol className="text-justify text-gray-500 list-disc lg:text-xl">
                        <li>Patronages and referrals through the centralized call 
                        contact centre administered by Benson Coleman & Associates.</li>
                        <li>Provision of Medical Equipment 
                        Leasing possibilities for Hospitals and Diagnostic Centres</li>
                        <li>Regular advertisement of service offerings in local and international media.</li>
                        <li>Access to affordable finance as working capital or growth capital credits.</li>
                        <li>Access to high-level financial and business advisory services.</li>
                        <li>Access to a pool of ambulance services owned by network partners but administered by Benson Coleman & Associates.</li>
                        <li>Access to diverse business promotion activities that would be provided by Benson Coleman & Associates.</li>
                        <li>Provision of investment advisory services to newcomers into healthcare business for proper guidance based on market intelligence.</li>
                    </ol>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row p-10 border-cyan-500">
                <div className="grid gap-2 lg:w-1/2">
                    <h3 className="capitalize font-bold border-l-4 border-cyan-500 text-xl p-2">Members&apos; benefits and privileges</h3>
                    <ol className="text-justify text-gray-500 lg:text-xl list-disc">
                       <li>Help practitioners to develop clinical services strategies that guarantee efficiency and proper capacity utilization.</li>
                       <li>Coordinate bulk purchases and inventory management that ensures the best pricing for medical equipment and medical consumables</li>
                       <li>Facilitate recruitment of healthcare professionals and HR planning to suit the need of medical facilities.</li>
                       <li>Provide management consultancy services to help revamp ailing healthcare businesses</li>
                       <li>Membership of the network does not expose any of the participating businesses to financial loss, litigation, or indictment based on the misconduct of another member of the network.</li>
                       <li>Members shall be open to discounted pricing for goods and services offered to the clients referred from the Online Portal of the Network, and also from the Call Contact Centre as an incentive to drive more business throughput in the network.</li>
                       <li>Service Providers shall grant a Corporate discount of 20% to Benson Coleman & Associates and half of this discount would be passed on to the clients as a means encouraging patronage through the BCA Healthcare Network platform.</li>
                       <li>Where possible, a price list for goods and services offered by BCA Network members shall be made available by them to Benson Coleman and Associates Ltd Contact Call Centre as clients may desire to know such costs to plan their purchase.</li>
                    </ol>
                </div>
            </div>
            <Link href="/dashboard/healthcare" className={`text-cyan-500 ${inter.className} mb-10 mx-10`}>JOIN OUR NETWORK</Link>
        </div>
    );
}
