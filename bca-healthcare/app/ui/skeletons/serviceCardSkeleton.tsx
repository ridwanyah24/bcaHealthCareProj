// ServiceCardSkeleton.tsx
export default function ServiceCardSkeleton() {
    return (
        <div className="p-4 border rounded shadow-md animate-pulse">
            <div className="w-full h-56 bg-gray-300 rounded-t-md"></div>
            <div className="p-4">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
        </div>
    );
}
