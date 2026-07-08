import { useState } from "react";
import clsx from "clsx";

const placements = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const Tooltip = ({
  children,
  content,
  placement = "top",
  className = "",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={clsx(
        "relative inline-flex",
        className
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}

      <div
        className={clsx(
          "pointer-events-none absolute z-50 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200",
          placements[placement],
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;