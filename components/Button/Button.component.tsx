import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  type: "button" | "submit" | "reset";
  primary?: boolean;
}

export const Button = ({
  title = "Button Text",
  type = "button",
  primary = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${
        primary
          ? "bg-yellow mr-3 w-button px-3 py-2 font-bold uppercase"
          : "py-2 px-3 border w-button border-light-gray font-bold uppercase"
      }`}
      type={type}
      {...props}
    >
      {title}
    </button>
  );
};
