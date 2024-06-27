import { useState, useEffect, ReactNode } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import '@/app/globals.css';
import GettingStarted from './getttingstarted';

function Slide({ children }:{children:ReactNode}) {
    return (
        <div className="w-full flex-shrink-0">
            {children}
        </div>
    );
}

const slides = [
    { id: 1, content: <GettingStarted /> },
    { id: 2, content: <GettingStarted /> },
    { id: 3, content: <GettingStarted /> },
];

export default function SlidingDiv() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative overflow-hidden h-full w-full lg:h-[600px] xl:h-[500px] 2xl:h-[500px]'>
            <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide) => (
                    <Slide key={slide.id}>
                        {slide.content}
                    </Slide>
                ))}
            </div>
            <button onClick={prevSlide} className='absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-teal-500 text-white rounded-full'>
                <ChevronLeftIcon className='h-8 w-8' />
            </button>
            <button onClick={nextSlide} className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-teal-500 text-white rounded-full'>
                <ChevronRightIcon className='h-8 w-8' />
            </button>
            <div className="absolute bottom-0 w-full flex justify-center pb-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`mx-1 w-3 h-3 rounded-full ${currentSlide === index ? 'bg-teal-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
}
