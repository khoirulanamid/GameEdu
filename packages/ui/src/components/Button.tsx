
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const backgroundColor =
    variant === "primary" ? "#2563eb" : "#e5e7eb";

  const color = variant === "primary" ? "#ffffff" : "#111827";

  return (
    <button
      {...props}
      style={{
        padding: "10px 16px",
        border: "none",
        borderRadius: "6px",
        backgroundColor,
        color,
        cursor: "pointer",
        ...props.style,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
