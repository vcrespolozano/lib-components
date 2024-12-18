import React from "react";
import "./Card.scss";
import { Text } from "@components/Text";

export interface CardProps {
  title?: string;
  description?: string;
  shadow?: boolean;
  rounded?: boolean;
}

export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  rounded,
  shadow,
  title,
  description,
  children,
}) => {
  return (
    <div
      className={`card ${rounded ? "rounded" : ""} ${shadow ? "shadow" : ""}`}
    >
      {title && (
        <Text
          value={title}
          kind="PARAGRAPH"
          weight="weight_medium"
          size="size_title"
          className="card__title"
        />
      )}
      {description && (
        <Text
          value={description}
          kind="PARAGRAPH"
          weight="weight_medium"
          size="size_normal"
          className="card__description"
        />
      )}
      {children}
    </div>
  );
};
