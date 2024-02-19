import React from "react";
import Image from "next/image";

import { MandatoryItemProps } from "@/data/mandatoryItems";

export const MandatoryItem = ({ item }: { item: MandatoryItemProps }) => {
  return (
    <div className="p-3 h-full mx-auto">
      <h1 className="font-bold text-center mb-3">{item.name}</h1>
      <div className="flex gap-5">
        {item.descriptions.map((description: any, index: number) => (
          <div className="" key={index}>
            <Image
              width={40}
              height={40}
              src={description.image}
              alt={description.type}
            />
            <p>{description.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
