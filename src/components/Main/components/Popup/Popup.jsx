import { useEffect } from "react";

export default function Popup(props) {
  const { title, children, onClose } = props;

  useEffect(() => {
    function handleEscClose(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);

  return (
    <div className="popup" onClick={onClose}>
      <div
        className={`popup__content ${!title ? "popup__content_content_image" : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Fechar pop-up"
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
