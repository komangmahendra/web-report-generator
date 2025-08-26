import React from "react";
import { cn } from "../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost";
};

export default function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors";
  const variantCls =
    variant === "ghost"
      ? "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800"
      : "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-black";

  return <button className={cn(base, variantCls, className)} {...props} />;
}
