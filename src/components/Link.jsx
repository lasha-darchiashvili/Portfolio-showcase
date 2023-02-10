import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "border-b border-green" : ""
      } hover:border-b hover:border-green transition-all duration-500 cursor-pointer`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
