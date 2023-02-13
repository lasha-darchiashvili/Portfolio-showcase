import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink className="cursor-pointer" href={`#${lowerCasePage}`}>
      {page}
    </AnchorLink>
  );
};

export default Link;
