import React from "react";

import { MandatoryItem } from "../MandatoryItem/MandatoryItem.component";
import { mandarotyItems } from "@/data/mandatoryItems";

export const MandatoryItemsBox = () => {
  return (
    <div className="mt-5 bg-slate-300 w-full flex gap-5">
      {mandarotyItems.map((item, index) => (
        <MandatoryItem key={index} item={item} />
      ))}
    </div>
  );
};
