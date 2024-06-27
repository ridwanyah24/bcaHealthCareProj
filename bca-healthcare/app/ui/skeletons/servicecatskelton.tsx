'use client';

export default function ServiceCatSkeleton() {
    return (
        <div className="w-64 p-4">
            <div className="animate-pulse flex flex-col space-y-4">
                <div className="h-8 bg-gray-300 rounded"></div>
                <div className="space-y-2">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="h-12 bg-gray-300 rounded"></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
