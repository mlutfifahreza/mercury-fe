import React from "react";

const LinkCard = ({ link }) => {
  console.log("link.store_color", link.store_color);
  return (
    <a href={link.link} target="_blank" rel="noopener noreferrer">
      <div className="mt-4 p-6 rounded-md shadow-md  border-black border-2">
        <div className="flex items-left justify-left">
          <img src={link.store_icon} className="h-7 w-auto mr-2" />
          <div className="text-xl text-center">{link.store_name}</div>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
