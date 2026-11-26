
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "success" | "warning" | "danger";
}

function Badge({
  children,
  variant = "success",
  ...props
}: BadgeProps) {
  const colors = {
    success: {
      background: "#dcfce7",
      color: "#166534",
    },
    warning: {
      background: "#fef3c7",
      color: "#92400e",
    },
    danger: {
      background: "#fee2e2",
      color: "#991b1b",
    },
  };

  return (
    <span
      {...props}
      style={{
        display: "inline-block",
        padding: "4px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: "600",
        backgroundColor: colors[variant].background,
        color: colors[variant].color,
        ...props.style,
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
