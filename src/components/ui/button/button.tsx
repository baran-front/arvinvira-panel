import { cn } from "@/lib/cn";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "@base-ui-components/react";

function Button({
  variant,
  color,
  size,
  isSquare,
  isRounded,
  isFull,
  className,
  ...props
}: BaseButtonProps & {
  variant?: "fill" | "outline" | "soft" | "ghost" | "float",
  color?: "foreground" | "background" | "primary" | "secondary" | "error" | "warning" | "success" | "info",
  size?: "sm" | "lg",
  isSquare?: boolean,
  isRounded?: boolean,
  isFull?: boolean,
}) {
  const variantClasses = {
    fill: "btn-fill",
    outline: "btn-outline",
    soft: "btn-soft",
    ghost: "btn-ghost",
    float: "btn-float",
  };
  const colorClasses = {
    foreground: "palette-foreground",
    background: "palette-background",
    primary: "palette-primary",
    secondary: "palette-secondary",
    error: "palette-error",
    warning: "palette-warning",
    success: "palette-success",
    info: "palette-info",
  };
  const sizeClasses = {
    sm: "btn-sm",
    lg: "btn-lg",
  };
  const squareClass = isSquare ? "btn-square" : "";
  const roundedClass = isRounded ? "btn-rounded" : "";
  const fullClass = isFull ? "btn-full" : "";

  return (
    <BaseButton
      className={cn(
        "btn",
        variant && variantClasses[variant],
        color && colorClasses[color],
        size && sizeClasses[size],
        squareClass,
        roundedClass,
        fullClass,
        className
      )}
      {...props}
    />
  );
}

export default Button;