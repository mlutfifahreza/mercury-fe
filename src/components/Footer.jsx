import React from "react";

import { HeartOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <nav className="bg-gray-700 border-b border-gray-500 mt-6">
      <div className="flex items-center justify-center h-12">
        <div className="text-white text-xs">
          Made with <HeartOutlined /> by{" "}
          <a
            href="https://github.com/mlutfifahreza"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            github.com/mlutfifahreza
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
