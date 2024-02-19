import React from "react";

type MainTitleDescriptionProps = {
  title: string;
  description: string;
};

export const MainTitleDescription = ({
  title = "",
  description = "",
}: MainTitleDescriptionProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl w-[180px] font-bold uppercase border-b-8 border-black">
        {title}
      </h1>
      <p className="text-light-grey my-8">{description}</p>
    </div>
  );
};
