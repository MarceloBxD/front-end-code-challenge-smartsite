import React from "react";

import { MandatoryItem } from "../MandatoryItem/MandatoryItem.component";
import { mandarotyItems } from "@/data/mandatoryItems";

export const MandatoryItemsBox = () => {
  return (
    <div className="flex mt-7 w-full gap-5">
      {mandarotyItems.map((item, index) => (
        <MandatoryItem key={index} item={item} />
      ))}
    </div>
  );
};
