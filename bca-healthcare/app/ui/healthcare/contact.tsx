import Image from "next/image";
import Link from "next/link";

export default function ContactUsForm() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-between p-4 lg:h-[100vh]">
            <div className="flex flex-col items-center lg:items-center mb-40 lg:w-1/2 p-4 lg:my-20">
                <h1 className="my-10 text-4xl">Contact Us</h1>
                <h2 className="text-2xl text-gray-500 mt-4 mb-8 text-center lg:text-left">Got any questions for Us? Please leave a Message.</h2>
                <form action='' className="w-full max-w-md">
                <fieldset className="mb-4 border-black-200">
                        <legend className="block font-medium text-sm text-gray-700 mb-2">Full Name</legend>
                        <input 
                            type="text" 
                            id="companyId" 
                            name="companyName"
                            defaultValue=""
                            aria-describedby="company-error"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </fieldset> 

                    <fieldset className="mb-4">
                        <legend className="block text-sm font-medium text-gray-700 mb-2">Email</legend>
                        <input 
                            type="email" 
                            name="email" 
                            id="emailId" 
                            defaultValue=""
                            className="block w-full p-2 borderborder-cyan-300 rounded-md"
                        />
                    </fieldset>
                    <fieldset className="mb-4">
                        <legend className="block text-sm font-medium text-gray-700 mb-2">Message</legend>
                        <textarea
                            name="message"
                            id="messageId"
                            className="block w-full p-2 border border-cyan-300 rounded-md focus:border-cyan-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            rows={10}
                        ></textarea>
                    </fieldset>
                    <button type="submit" className="w-full bg-teal-600 text-white p-2 rounded-md">Send</button>
                </form>
            </div>
            <div className="hidden lg:block lg:w-3/5 p-4 relative lg:w-[40%] lg:h-[90vh] mb-20">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/doc3.png')" }}></div>
                <div className="absolute inset-0 bg-cover bg-center bg-gray-700 opacity-40"></div>
                <div className="w-1/2 h-full ">
                    <Image 
                    src="/icon.png" 
                    alt="logo_Cover" 
                    width={50} 
                    height={100} 
                    className="absolute top-[45%] left-[50%] z-10 m"
                    />
                </div>
            </div>
        </div>
    );
}
