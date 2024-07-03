import Image from "next/image";
import Link from "next/link";

export default function ContactSec() {
    return (
        <div className="w-full bg-gray-50 flex justify-between h-fit">
        <div className="flex flex-row flex-wrap  lg:w-full lg:justify-center w-4/5 lg:flex-row justify-between p-10 bg-gray-50">
            <div className="flex flex-col items-start lg:items-start lg:w-1/2 w-full xl:w-1/4 mb-8 lg:mb-0 p-4">
                <Image alt="Company Icon" src='/icon.png' width={70} height={70} className="mb-4"/>
                <p className="text-justified lg:text-left text-gray-700 pr-4">
                    Every individual has a right to life and good health. Our goal is to ensure that you live a healthy life.
                </p>
            </div>

            <div className="flex flex-col items-start w-1/2 lg:items-start lg:w-1/2 w-full xl:w-1/4 mb-8 lg:mb-0 p-4">
                <h2 className="text-xl font-bold mb-4">Support</h2>
                <nav className="space-y-2 text-start lg:text-left grid">
                    <Link href="/service-providers" className="text-teal-600 hover:underline">Service Providers</Link>
                    <Link href="/consultancy" className="text-teal-600 hover:underline">Consultancy</Link>
                    <Link href="/specialization" className="text-teal-600 hover:underline">Specialization</Link>
                    <Link href="/health-care-services" className="text-teal-600 hover:underline">Health Care Services</Link>
                </nav>
            </div>

            <div className="flex flex-col items-start md:w-1/2 lg:items-start lg:w-1/2 w-full xl:w-1/4 mb-8 lg:mb-0 p-4">
                <h2 className="text-xl font-bold mb-4">Help Center</h2>
                <nav className="space-y-2 text-start lg:text-left grid">
                    <Link href="/faq" className="text-teal-600 hover:underline">FAQ</Link>
                    <Link href="/reviews" className="text-teal-600 hover:underline">Reviews</Link>
                    <Link href="/partnership" className="text-teal-600 hover:underline">Partnership</Link>
                </nav>
            </div>

            <div className="flex flex-col items-start md:w-1/2 lg:items-start lg:w-1/2 w-full xl:w-1/4 mb-8 lg:mb-0 p-4">
                <h2 className="text-xl font-bold mb-4">Contact</h2>
                <nav className="space-y-2 text-start lg:text-left grid">
                    <Link href="tel:09057883261" className="text-teal-600 hover:underline">0905 788 3261</Link>
                    <Link href="tel:08069515589" className="text-teal-600 hover:underline">0806 951 5589</Link>
                    <Link href="mailto:healthcarenetwork@bensoncoleman.com" className="text-teal-600 hover:underline">healthcarenetwork@bensoncoleman.com</Link>
                    <Link href="http://www.bcahealthcarenetwork.com" className="text-teal-600 hover:underline">www.bcahealthcarenetwork.com</Link>
                </nav>
            </div>
        </div>
        </div>
    );
}
