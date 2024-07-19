// ServiceCard.tsx
import Image from 'next/image';
import StarRating from './starRating';

export default function ServiceCard({ serviceName, src, bio, rating }: { serviceName: string, src: string, bio: string, rating: number }) {
    return (
        <div className="p-4 border rounded shadow-md">
            <Image src={src} width={500} height={300} alt={serviceName} className="rounded-t-md" />
            <div className="p-4">
                <h3 className="text-lg font-bold">{serviceName}</h3>
                <p className="text-gray-700">{bio}</p>
                <StarRating rating={rating} />
            </div>
        </div>
    );
}
