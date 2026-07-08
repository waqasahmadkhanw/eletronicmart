import clsx from "clsx";

const variants = {
  text: "h-4 w-full rounded",
  title: "h-8 w-2/3 rounded-lg",
  avatar: "h-12 w-12 rounded-full",
  button: "h-11 w-32 rounded-xl",
  image: "aspect-square w-full rounded-2xl",
  card: "h-80 w-full rounded-3xl",
};

const Skeleton = ({
  variant = "text",
  width,
  height,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        "animate-pulse bg-gray-200",
        variants[variant],
        className
      )}
      style={{
        width,
        height,
      }}
    />
  );
};

export default Skeleton;