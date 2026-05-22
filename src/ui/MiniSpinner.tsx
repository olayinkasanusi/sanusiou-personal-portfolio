export default function MiniSpinner({
  size = 48,
  color = "#6C5CE7",
  strokeWidth = 4,
  speed = 1.2, // rotation speed in seconds
  className = "",
  ariaLabel = "Loading",
}) {
  return (
    <div className="w-full flex justify-center items-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        role="img"
        aria-label={ariaLabel}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animation: `spin ${speed}s linear infinite`,
        }}
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray="90 150" // gives the arc effect
        />

        <style>{`
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
            }
            `}</style>
      </svg>
    </div>
  );
}
