'use client'
import '@/app/globals.css'
import Link from 'next/link'
import {ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// import 'clsx'
import Image from 'next/image'
import {useEffect, useState } from 'react'

export default function Nav2(){
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOutsideClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if ((isOpen && !target.closest('.sidenav') && !target.closest('.menu-button')) ||
            (dropdownOpen && !target.closest('.dropdown-menu'))) {
            setIsOpen(false);
            setDropdownOpen(false);
        }
    };
    useEffect(() => {
        if (isOpen || dropdownOpen) {
            document.addEventListener('click', handleOutsideClick);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('click', handleOutsideClick);
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, dropdownOpen]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return ( 
    <div className="w-full relative shadow-md shadow-gray-400 ">
    <div className="flex justify-between items-center p-4 lg:hidden">
    <Link href="/dashboard"><Image src="/icon.png" alt="Logo of Site" className="lg:mr-4" width={40} height={40}/></Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? "" : <Bars3Icon className="h-6 w-6" />}
        </button>
    </div>
        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        )}
    <div className={`${isOpen? 'sidenav-open': ""} sidenav absolute shadow-lg shadow-gray-600 top-0 left-0 w-80 bg-white bb lg:hidden z-50`}>
        <div className='bg-gray-50 p-4 h-full'>
        <button onClick={() => setIsOpen(false)} className="text-gray-700 mb-4 focus:outline-none">
            <XMarkIcon className="h-6 w-6 mx-64 " />
        </button>
        <div className='w-full h-24'></div>
        <div className="menu flex flex-col ">
            <form action="" className="flex items-center mb-4">
                <input
                    type="search"
                    className="p-2  border border-gray-300 rounded w-full"
                    placeholder="Search by service name and provider name"                    
                />
                <button className="bg-teal-700 flex-between items-center gap-2 flex text-white p-2 rounded ml-2">
                <MagnifyingGlassIcon className='w-6 text-black '/>
                </button>
            </form>
            <Link href="/dashboard/healthcare" className="text-gray-700 p-2 hover:bg-gray-200 rounded w-fit">
                HealthCare Providers
            </Link>
            <Link href="/dashboard/about" className="text-gray-700 p-2 hover:bg-gray-200 w-fit rounded">
                About
            </Link>
            <span onClick={toggleDropdown} className="text-gray-700 p-2 hover:bg-gray-200 rounded w-fit cursor-pointer">Help Center
            {dropdownOpen && (
            <span className="flex flex-col ml-4 mt-2">
                <Link href="/dashboard/faq" className="text-teal-700 p-2 hover:bg-gray-50 rounded w-fit">
                    FAQ
                </Link>
                <Link href="/dashboard/support" className="text-teal-700 p-2 hover:bg-gray-50 rounded w-fit">
                Support
                </Link>
            </span>
            )}
            </span>
            <Link href="/dashboard/cart" className="text-gray-700 p-2 hover:bg-gray-200 w-fit rounded flex items-center">
                <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <Link href="/login" className="text-gray-700 p-2 hover:bg-gray-200 rounded w-fit">
                Logout
            </Link>
        </div>
        </div>
    </div>
    <div className="hidden lg:flex lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:w-full lg:shadow-md lg:shadow-gray-400 p-4">
        <Link href="/dashboard"><Image src="/icon.png" alt="Logo of Site" className="lg:mr-4" width={40} height={40}/></Link>
        <div className="menu flex flex-col lg:flex-row lg:items-center">
            <form action="" className="flex items-center lg:mb-0">
                <input
                    type="search"
                    className="p-2 border border-gray-300 rounded w-full lg:w-72"
                    placeholder="Search by service name and provider name"
                />
                <button className="bg-teal-700 text-white p-2 rounded ml-2 lg:ml-4">
                    SEARCH
                </button>
            </form>
            <Link href="/dashboard/healthcare" className="text-gray-700 p-2 lg:p-4 hover:bg-gray-200 rounded">
                HealthCare Providers
            </Link>
            <Link href="/dashboard/about" className="text-gray-700 p-2 lg:p-4 hover:bg-gray-200 rounded">
                About
            </Link>
            <span onClick={toggleDropdown} className="text-gray-700 p-2 hover:bg-gray-200 rounded w-fit cursor-pointer">Help Center
            {dropdownOpen && (
            <div className="flex flex-col bg-gray-100 mr-4 mt-2 absolute z-50 full ">
                <Link href="/dashboard/faq" className="text-teal p-2 rounded w-full hover:bg-gray-200">
                    FAQ
                </Link>
                <Link href="/dashboard/support" className="text-teal p-2 hover:bg-gray-200 rounded w-full">
                Support
                </Link>
            </div>
            )}</span>
            <Link href="/dashboard/cart" className="text-gray-700 p-2 lg:p-4 hover:bg-gray-200 rounded flex items-center">
                <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <Link href="/login" className="text-gray-700 p-2 lg:p-4 hover:bg-gray-200 rounded">
                Logout
            </Link>
        </div>
    </div>
</div>
);
}