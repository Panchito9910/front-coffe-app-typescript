import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface IconButtonProps {
  icon: IconProp;
  className: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const IconButton = ({ icon, className, onClick }: IconButtonProps) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconButton;
