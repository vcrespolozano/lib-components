import { Button } from "@components/atoms/Button";
import { Text } from "@components/atoms/Text";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import "./Modal.scss";

export interface ModalProps {
  title: string;
  description: string;
  notClose?: boolean;
  acceptOnClick?: () => void;
  shortPopup?: boolean;
  centerContent?: boolean;
  fullScreenMobile?: boolean;
  onClose?: () => void;
  visible: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  notClose = false,
  acceptOnClick,
  shortPopup = false,
  centerContent = false,
  fullScreenMobile = false,
  onClose,
  visible = false,
}) => {
  const [popupAnimation, setPopupAnimation] = useState("animated_popupIn");
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    if (!visible && isVisible) {
      setPopupAnimation("animated_popupOut");
      setTimeout(() => {
        setIsVisible(false);
      }, 700);
    } else if (visible && !isVisible) {
      setPopupAnimation("animated_popupIn");
      setIsVisible(true);
    }
  }, [visible]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleAcceptClick = () => {
    if (acceptOnClick) {
      acceptOnClick();
      handleClose();
    }
  };

  if (!isVisible) {
    return false;
  }

  return (
    <div className="modal">
      <div
        className={`modal__popUp ${popupAnimation} ${
          shortPopup ? "shortPopup" : ""
        } ${fullScreenMobile ? "fullScreenMobile" : ""}`}
      >
        {!notClose && (
          <span className="modal__popUp_close" onClick={handleClose}>
            <ImCross size={16} />
          </span>
        )}
        <div className="modal__popUp_content">
          <Text
            value={title}
            size="size_title"
            weight="weight_medium"
            kind="PARAGRAPH"
            display="display_block"
            align={centerContent ? "align_center" : "align_left"}
            className="popup-title"
          />
          <Text
            value={description}
            size="size_medium"
            weight="weight_regular"
            kind="DIV"
            display="display_block"
            align={centerContent ? "align_center" : "align_left"}
            className="popup-description"
          />
          {acceptOnClick && (
            <div className="modal__popUp_buttons">
              <Button label="Cancelar" onClick={handleClose} />
              <Button label="Aceptar" onClick={handleAcceptClick} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
