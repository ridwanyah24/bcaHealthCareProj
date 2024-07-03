'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/16/solid';

function Services({ isOpen }: { isOpen: boolean }) {
    return (
        <div>
            <div className={`services absolute top-0 w-64 left-0 custom bg-gray-50 pl-8 shadow-lg customScroll transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
                <div className="grid gap-6 overflow-y-scroll h-96">
                    <p className="my-12 text-cyan-500 transform-capitalize text-lg">Service Category</p>
                    <Link href=""><Image alt="" src="" /> Hospitals</Link>
                    <Link href=""><Image alt="" src="" /> Laboratory Services</Link>
                    <Link href=""><Image alt="" src="" /> X-Ray Services</Link>
                    <Link href=""><Image alt="" src="" /> CT-Scan Services</Link>
                    <Link href=""><Image alt="" src="" /> MRI Services</Link>
                    <Link href=""><Image alt="" src="" /> Ambulance Services</Link>
                    <Link href=""><Image alt="" src="" /> Dental Care Services</Link>
                    <Link href=""><Image alt="" src="" /> Pharmacy</Link>
                    <Link href=""><Image alt="" src="" /> Physiotherapy</Link>
                    <Link href=""><Image alt="" src="" /> Cardiology Services</Link>
                </div>
            </div>
            <div className="hidden lg:block xl:block 2xl:block bg-white w-64 my-8 mx-auto lg:h-[500px] xl:h-[500px] 2xl:h-[500px]">
                <div className="grid gap-2 overflow-y-scroll customScroll pb-16">
                    <p className="mb-16 text-cyan-500 transform-capitalize text-center my-12 align-center text-lg ">Service Category</p>
                    <Link href="" className="hover:bg-gray-100 text-center h-12"><Image alt="" src="" /> Hospitals</Link>
                    <Link href="" className="hover:bg-gray-100 h-12 text-center"><Image alt="" src=""/> Laboratory Services</Link>
                    <Link href="" className="hover:bg-gray-100 h-12 text-center"><Image alt="" src="" /> X-Ray Services</Link>
                    <Link href="" className="hover:bg-gray-100 h-12 text-center"><Image alt="" src="" /> CT-Scan Services</Link>
                    <Link href="" className="hover:bg-gray-100 h-12 text-center"><Image alt="" src="" /> MRI Services</Link>
                    <Link href="" className="hover:bg-gray-100 h-12 text-center"><Image alt="" src="" /> Ambulance Services</Link>
                    <Link href="" className="hover:bg-gray-100 h-12 text-center"><Image alt="" src="" /> Dental Care Services</Link>
                    <Link href="" className="hover:bg-gray-100 h-12 text-center"><Image alt="" src="" /> Pharmacy</Link>
                    <Link href="" className="hover:bg-gray-100 h-12 text-center"><Image alt="" src="" /> Physiotherapy</Link>
                    <Link href="" className="hover:bg-gray-100 h-12 text-center"><Image alt="" src="" /> Cardiology Services</Link>
                </div>
            </div>
        </div>
    );
}

export default function ServiceCat() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOutsideClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (isOpen && !target.closest('.services') && !target.closest('.menu-button')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleOutsideClick);
            document.body.style.overflow ="hidden";
        } else {
            document.removeEventListener('click', handleOutsideClick);
            document.body.style.overflow ="auto"

        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.body.style.overflow ="auto"
        };
    }, [isOpen]);

    return (
        <div className={`w-64`}>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
            )}
            <Services isOpen={isOpen} />
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`menu-button ${isOpen ? "left-64" : "left-0"} text-gray-700 absolute my-12 bg-teal-600 lg:hidden 2xl:hidden xl:hidden rounded-s-sm z-50 rounded transition-all duration-300`}
            >
                {isOpen ? <ChevronLeftIcon className="h-8 w-8" /> : <ChevronRightIcon className="h-8 w-8" />}
            </button>
        </div>
    );
}
