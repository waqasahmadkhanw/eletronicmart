import { X } from "lucide-react";
import { createPortal } from "react-dom";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  closeOnOverlay = true,
  showCloseButton = true,
}) => {
  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
    xl: "max-w-5xl",
    full: "max-w-7xl",
  };

  const handleOverlayClick = () => {
    if (closeOnOverlay) {
      onClose?.();
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={handleOverlayClick}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        className={`relative mx-4 w-full ${sizes[size]} overflow-hidden rounded-2xl bg-white shadow-2xl`}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-bold text-gray-900">
              {title}
            </h2>

            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-red-500"
                aria-label="Close Modal"
              >
                <X size={22} />
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;