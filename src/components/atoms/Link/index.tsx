import React from "react";
import "./Link.scss";

export interface LinkProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  label,
  onClick,
  className,
  target = "_self",
  rel,
}) => {
  return (
    <a
      href={href || "#"}
      onClick={onClick}
      className={`link ${className || ""}`}
      target={target}
      rel={rel || ""}
    >
      {label}
    </a>
  );
};
