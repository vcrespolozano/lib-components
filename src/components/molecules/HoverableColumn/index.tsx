import { Text } from "@components/atoms/Text";
import React from "react";
import "./HoverableColumn.scss";
import { TextColor } from "@components/atoms/Text/constants";

export interface HoverableColumnProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  backgroundImage?: string;
  className?: string;
  align?: "left" | "center" | "right";
  textColor?: TextColor;
}

export const HoverableColumn: React.FC<HoverableColumnProps> = ({
  title,
  description,
  icon,
  onClick,
  backgroundImage,
  className,
  align = "left",
  textColor = "color_black",
}) => {
  return (
    <div
      className={`hoverableColumn align_${align} ${className || ""}`}
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
      onClick={onClick}
    >
      {icon && <div className="hoverableColumn__icon">{icon}</div>}
      {title && (
        <Text
          value={title}
          kind="PARAGRAPH"
          weight="weight_medium"
          size="size_title"
          className="hoverableColumn__title"
          align={`align_${align}`}
          color={textColor}
        />
      )}
      {description && (
        <Text
          value={description}
          kind="PARAGRAPH"
          weight="weight_regular"
          size="size_normal"
          className="hoverableColumn__description"
          align="align_justify"
          color={textColor}
        />
      )}
    </div>
  );
};
