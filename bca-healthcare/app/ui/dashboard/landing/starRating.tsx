'use client'
import { useState } from "react";
import { StarIcon as SolidStarIcon } from "@heroicons/react/16/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

const StarRating = ({ rating }: { rating: number }) => {
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    return (
        <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
                <div
                    key={star}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                >
                    {hoverRating !== null ? (
                        hoverRating >= star ? (
                            <SolidStarIcon className="h-6 w-6 text-yellow-500" />
                        ) : (
                            <OutlineStarIcon className="h-6 w-6 text-yellow-500" />
                        )
                    ) : rating >= star ? (
                        <SolidStarIcon className="h-6 w-6 text-yellow-500" />
                    ) : (
                        <OutlineStarIcon className="h-6 w-6 text-yellow-500" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default StarRating;
