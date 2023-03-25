import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleFixedheader = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 400) {
        header.classList.add("fixed");
      } else header.classList.remove("fixed");
    };

    window.addEventListener("scroll", handleFixedheader);
    return () => {
      window.removeEventListener("scroll", handleFixedheader);
    };
  }, []);
  return <div className="p-5 bg-black w-full " id="header"></div>;
};

export default Header;
