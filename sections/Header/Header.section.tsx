import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logosmart.png";

export const Header = () => {
  return (
    <header className="w-screen p-2 bg-black">
      <Image src={logo} alt="Logo" className="w-[320px] object-cover mx-auto" />
    </header>
  );
};
