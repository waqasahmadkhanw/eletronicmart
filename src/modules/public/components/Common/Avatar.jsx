import clsx from "clsx";
import { User } from "lucide-react";

const sizes = {
  xs: "h-8 w-8",
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-20 w-20",
};

const Avatar = ({
  src,
  alt = "Avatar",
  name = "",
  size = "md",
  rounded = "full",
  status,
  className = "",
}) => {
  const initials = name
    ? name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  return (
    <div className="relative inline-flex">
      <div
        className={clsx(
          "flex items-center justify-center overflow-hidden bg-gray-100 text-gray-600",
          sizes[size],
          rounded === "full" ? "rounded-full" : "rounded-xl",
          className
        )}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        ) : initials ? (
          <span className="text-sm font-bold">
            {initials}
          </span>
        ) : (
          <User size={22} />
        )}
      </div>

      {/* Online / Offline Status */}
      {status && (
        <span
          className={clsx(
            "absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white",
            status === "online"
              ? "bg-green-500"
              : status === "busy"
              ? "bg-red-500"
              : status === "away"
              ? "bg-yellow-500"
              : "bg-gray-400"
          )}
        />
      )}
    </div>
  );
};

export default Avatar;