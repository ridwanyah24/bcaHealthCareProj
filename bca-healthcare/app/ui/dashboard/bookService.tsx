import '@/app/globals.css';
import Image from 'next/image';
import Button from './button';



export default function BookService() {
    return (
        <div className='bg-gray-50 w-fit w-4/5 md:mx-10 lg:w-4/5 xl:w-4/5 mx-auto lg:static absolute lg:customScroll lg:flex-shrink-0 my-8 p-4 lg:mx-6 flex justify-center'>
            <div className="lg:flex lg:gap-14 flex-col lg:flex-row items-center lg:w-4/5 ">
                <div className='flex flex-col gap-12 lg:gap-10 text-left p-0 lg:text-left'>
                    <h1 className='text-2xl text-cyan-500 lg:text-2xl font-bold'>Signup with us and ENjoy Discounted HealthCare Services</h1>
                    <p className='text-lg lg:text-xl'>Choose the healthcare service you require today</p>
                    <Button href='' classes='bg-teal-500 text-white px-4 py-2 rounded-md' name='BOOK A SERVICE'/>
                </div>
                <div className='w-full lg:w-1/2 lg:shrink-0'>
                    <Image src="/doctors1.png" alt="image of doctors" width={560} height={300} className='object-contain hidden lg:block'/>
                </div>
            </div>
        </div>
    )
}
