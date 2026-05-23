import { Loader2 } from "lucide-react";

interface MiniSpinnerProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  speed?: number; // seconds for full rotation
  className?: string;
  ariaLabel?: string;
}

export default function MiniSpinner({
  size = 20,
  color = "#2563EB",
  strokeWidth = 2,
  speed = 1.2,
  className = "",
  ariaLabel = "Loading",
}: MiniSpinnerProps) {
  const animationStyle = {
    animation: `spin ${speed}s linear infinite`,
  } as React.CSSProperties;

  return (
    <div className={`flex justify-center items-center ${className}`} aria-label={ariaLabel}>
      <Loader2 size={size} color={color} strokeWidth={strokeWidth} style={animationStyle} className="animate-spin" />
    </div>
  );
}
