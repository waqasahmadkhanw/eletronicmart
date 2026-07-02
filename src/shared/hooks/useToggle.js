import { useState } from "react";

export default function useToggle(
  initialValue = false
) {
  const [isOpen, setIsOpen] =
    useState(initialValue);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    toggle,
    open,
    close,
  };
}