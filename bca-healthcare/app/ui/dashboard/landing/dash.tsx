'use client';

import { Suspense } from 'react';
import ServiceCatSkeleton from '../../skeletons/servicecatskelton';
import ServiceCat from './servicecat';
import '@/app/globals.css';
import SlidingDiv from './sliding';

export default function Dash() {
    return (
        <div className="flex my-[-20px] flex-col lg:flex-row lg:w-full xl:w-4/5 2xl:w-3/5 p-4 xl:mx-auto gap-4">
            <Suspense fallback={<ServiceCatSkeleton />}>
                <ServiceCat id={''} />
            </Suspense>
            <SlidingDiv />
        </div>
    );
}
