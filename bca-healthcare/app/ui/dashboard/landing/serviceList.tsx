// ServiceList.tsx
'use client'
// import { useGetServicesQuery } from '@/app/lib/api/apiSlice'; 
import ServiceCard from './servicesCard';
import ServiceCardSkeleton from '../../skeletons/serviceCardSkeleton';

export default function ServiceList() {
    // const { data: services, error, isLoading } = useGetServicesQuery('');

    // if (isLoading) {
    //     return (
    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    //             {Array.from({ length: 6 }).map((_, index) => (
    //                 <ServiceCardSkeleton key={index} />
    //             ))}
    //         </div>
    //     );
    // }

    // if (error) {
    //     return <p>Error loading services...</p>;
    // }

    // return (
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    //         {services.map((service: any) => (
    //             <ServiceCard
    //                 key={service.id}
    //                 serviceName={service.serviceName}
    //                 src={service.imageUrl}
    //                 bio={service.bio}
    //                 rating={service.rating}
    //             />
    //         ))}
    //     </div>
    // );
}
