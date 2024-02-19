import React from "react";

import Logo from "../../_material/images/logo.svg";

export const Header = () => {
  return (
    <header className="w-screen bg-black">
      <img src={Logo} alt="Logo" className="w-24 h-24 mx-auto" />
    </header>
  );
};
