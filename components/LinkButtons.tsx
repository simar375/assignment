import React from "react";
import "./LinkButtons.css";

interface LinkButtonProps {
  url: string;
  label: string;
}

const LinkButtons: React.FC<LinkButtonProps> = ({ url, label }) => {
  return (
    <button className="link-button">
      <a href={url} target="_blank">
        {label}
      </a>
    </button>
  );
};

export default LinkButtons;
