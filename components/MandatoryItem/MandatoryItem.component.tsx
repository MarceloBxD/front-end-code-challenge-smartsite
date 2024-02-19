import React from "react";
import Image from "next/image";

import { MandatoryItemProps } from "@/data/mandatoryItems";

export const MandatoryItem = ({ item }: { item: MandatoryItemProps }) => {
  return (
    <div>
      <h1 className="font-bold">{item.name}</h1>
      <div>
        {item.descriptions.map((description: any, index: number) => (
          <div className="flex" key={index}>
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
