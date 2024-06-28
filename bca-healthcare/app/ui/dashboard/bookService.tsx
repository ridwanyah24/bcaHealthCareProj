import '@/app/globals.css';
import Image from 'next/image';
import Button from './button';



export default function BookService() {
    return (
        <div className='bg-gray-50 w-full md:w-4/5 xl:w-full 2xl:w-full lg:w-4/5 mx-auto my-8 p-4 lg:h-[500px] flex justify-center '>
        <div className="lg:flex lg:gap-14 flex-col lg:flex-row items-center  ">
            <div className='flex flex-col gap-6 lg:gap-8 text-left lg:text-left'>
                <h1 className='text-2xl text-cyan-500 lg:text-3xl font-bold capitalize lg:capitalize'>Signup with us and Enjoy Discounted HealthCare Services</h1>
                <p className='text-lg lg:text-xl'>Choose the healthcare service you require today</p>
                <Button href='' classes='bg-teal-500 text-white px-4 py-2 rounded-md' name='BOOK A SERVICE' />
            </div>
            <div className='w-full lg:w-1/2'>
                <Image src="/doc3.png" alt="image of doctors" width={500} height={500} className='object-contain lg:block hidden' />
            </div>
        </div>
    </div>
    )
}
