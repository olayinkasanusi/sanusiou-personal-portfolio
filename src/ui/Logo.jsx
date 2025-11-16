export default function Logo({
  size = 25,
  color = "#f9f8fc",
  strokeWidth = 4,
  className = "",
  variant = "outline",
  ariaLabel = "SO logo",
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    role: "img",
    "aria-label": ariaLabel,
    className,
  };
  const sPath =
    "M44 14c-8 0-12 6-12 10 0 6 6 8 10 10 4 2 6 6 4 10-2 4-8 8-14 8";

  if (variant === "filled") {
    return (
      <svg {...common} xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" fill={color} />

        <path
          d={sPath}
          fill="none"
          stroke="#fff"
          strokeWidth={strokeWidth * 2}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }

  return (
    <svg {...common} xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="32"
        cy="32"
        r="26"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d={sPath}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
