"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProuctImages = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[currentImageIndex]}
        alt={images[currentImageIndex]}
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />

      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              "border mr-2 cursor-pointer hover:border-gray-500",
              currentImageIndex === index ? "border-2 border-gray-500" : ""
            )}
          >
            <Image
              src={image}
              alt={image}
              width={100}
              height={100}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProuctImages;
