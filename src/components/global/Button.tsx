import clsx from "clsx";
import { ReactNode, MouseEvent } from "react";

interface ButtonComponents {
  activeClassName?: string;
  className?: string;
  isActive?: boolean;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  varients?: "filled" | "Outline";
}

export default function Button({
  className,
  activeClassName,
  isActive,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  varients,
  type = "button",
}: ButtonComponents) {
  const variantsTypes: { filled: string; Outline: string } = {
    filled: "bg-primary text-white text-base font-semibold",
    Outline:"border-2 dark:text-white text-primary border-primary text-sm font-semibold hover:bg-primary hover:text-white transitions-color duration-300 hover:shadow-md"
  };
  return (
    <button
      type={type}
      className={clsx(
        className,
        isActive && activeClassName,
        varients ? variantsTypes[varients] : ""
      )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
