import { useState, useEffect } from "react";
import { Text } from "@components/atoms/Text";
import "./Toast.scss";

export interface ToastProps {
  title?: string;
  description?: string;
  onClose?: () => void;
  life?: number;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  onClose,
  life = 3000,
  className,
}) => {
  const [toastClass, setToastClass] = useState(
    "animate__animated animate__fadeInDown"
  );

  useEffect(() => {
    setTimeout(() => {
      setToastClass("animate__animated animate__fadeOutUp");
    }, life);
    if (onClose) {
      setTimeout(() => {
        onClose();
      }, life + 500);
    }
  }, []);

  if (!description) {
    return false;
  }

  return (
    <div className={`toast ${className || ""} ${toastClass}`}>
      {title && (
        <Text
          value={title}
          size="size_medium"
          weight="weight_medium"
          kind="PARAGRAPH"
          display="display_block"
          align="align_center"
          className="toast__title"
        />
      )}
      <Text
        value={description}
        size="size_normal"
        weight="weight_regular"
        kind="PARAGRAPH"
        display="display_block"
        align="align_center"
        className="toast__description"
      />
    </div>
  );
};
