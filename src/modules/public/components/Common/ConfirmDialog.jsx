import {
  AlertTriangle,
  X,
} from "lucide-react";
import { createPortal } from "react-dom";
import Button from "./Button";

const ConfirmDialog = ({
  isOpen,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmVariant = "danger",
  loading = false,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Dialog */}
      <div className="relative mx-4 w-full max-w-md rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-2 text-red-600">
              <AlertTriangle size={22} />
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-red-500"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="leading-7 text-gray-600">
            {message}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-gray-200 p-5">
          <Button
            variant="secondary"
            onClick={onCancel}
          >
            {cancelText}
          </Button>

          <Button
            variant={confirmVariant}
            loading={loading}
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmDialog;