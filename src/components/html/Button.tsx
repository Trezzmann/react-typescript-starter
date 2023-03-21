import React from "react";

type buttonProps = Omit<React.ComponentProps<"button">, "children"> & {
  variant: "primary" | "secondary";
  children: string;
};

function Button({ variant, children, ...rest }: buttonProps) {
  return (
    <button className={`button-${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
