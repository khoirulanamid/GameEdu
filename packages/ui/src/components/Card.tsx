
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Card({ children, ...props }: CardProps) {
  return (
    <div
      {...props}
      style={{
        padding: "16px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        ...props.style,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
