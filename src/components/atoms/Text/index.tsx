import parse from "html-react-parser";
import "./Text.scss";

import {
  TextAlign,
  TextDisplay,
  TextKind,
  TextSize,
  TextWeight,
  TextColor,
} from "./constants";

export interface TextProps {
  value: string;
  size?: TextSize;
  weight?: TextWeight;
  kind?: TextKind;
  display?: TextDisplay;
  align?: TextAlign;
  className?: string;
  color?: TextColor;
  marginBottom?: string;
  marginTop?: string;
}

export const Text: React.FC<TextProps> = ({
  value,
  size = "size_normal",
  weight = "weight_regular",
  kind = "PARAGRAPH",
  display = "display_block",
  align = "align_left",
  className = "",
  color = "",
  marginBottom = null,
  marginTop = null,
}) => {
  if (!value) {
    return null;
  }

  switch (kind) {
    case "PARAGRAPH":
      return (
        <p
          className={`text ${size} ${weight} ${align} ${display} ${className} ${
            marginTop ? "margin_top" : ""
          } ${marginBottom ? "margin_bottom" : ""} ${color}`}
        >
          {parse(value)}
        </p>
      );
    case "SPAN":
      return (
        <span
          className={`text ${size} ${weight} ${align} ${display} ${className} ${
            marginTop ? "margin_top" : ""
          } ${marginBottom ? "margin_bottom" : ""} ${color}`}
        >
          {parse(value)}
        </span>
      );
    case "DIV":
      return (
        <div
          className={`text ${size} ${weight} ${align} ${display} ${className} ${
            marginTop ? "margin_top" : ""
          } ${marginBottom ? "margin_bottom" : ""} ${color}`}
        >
          {parse(value)}
        </div>
      );
    case "LABEL":
      return (
        <label
          className={`text ${size} ${weight} ${align} ${display} ${className} ${
            marginTop ? "margin_top" : ""
          } ${marginBottom ? "margin_bottom" : ""} ${color}`}
        >
          {parse(value)}
        </label>
      );
    default:
      return (
        <p
          className={`text ${size} ${weight} ${align} ${display} ${className} ${
            marginTop ? "margin_top" : ""
          } ${marginBottom ? "margin_bottom" : ""} ${color}`}
        >
          {parse(value)}
        </p>
      );
  }
};
