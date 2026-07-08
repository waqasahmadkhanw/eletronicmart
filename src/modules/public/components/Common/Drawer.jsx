import { X } from "lucide-react";
import { createPortal } from "react-dom";
import clsx from "clsx";

const positions = {
  left: "left-0 top-0 h-full w-80 -translate-x-full",
  right: "right-0 top-0 h-full w-80 translate-x-full",
  top: "left-0 top-0 h-80 w-full -translate-y-full",
  bottom: "bottom-0 left-0 h-80 w-full translate-y-full",
};

const activePositions = {
  left: "translate-x-0",
  right: "translate-x-0",
  top: "translate-y-0",
  bottom: "translate-y-0",
};

const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  position = "right",
  closeOnOverlay = true,
}) => {
  return createPortal(
    <div
      className={clsx(
        "fixed inset-0 z-50",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      {/* Overlay */}
      <div
        onClick={() => closeOnOverlay && onClose?.()}
        className={clsx(
          "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Drawer */}
      <aside
        className={clsx(
          "fixed bg-white shadow-2xl transition-transform duration-300",
          positions[position],
          isOpen && activePositions[position]
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-red-500"
            aria-label="Close Drawer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="h-[calc(100%-72px)] overflow-y-auto p-6">
          {children}
        </div>
      </aside>
    </div>,
    document.body
  );
};

export default Drawer;