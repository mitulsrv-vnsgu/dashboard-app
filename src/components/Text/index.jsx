import React from "react";

const sizeClasses = {
  xs: "font-normal text-base",
  s: "font-semibold text-[17px]",
  md: "font-bold text-lg",
  lg: "font-semibold text-xl",
  xl: "font-bold text-2xl md:text-[22px] sm:text-xl",
  "2xl": "font-medium md:text-2xl sm:text-[22px] text-[26px]",
  "3xl": "font-normal sm:text-[23px] md:text-[25px] text-[27px]",
  "4xl": "font-semibold sm:text-2xl md:text-[26px] text-[28px]",
  "5xl": "font-bold text-3xl sm:text-[26px] md:text-[28px]",
  "6xl": "font-bold sm:text-3xl md:text-[32px] text-[34px]",
  "7xl": "font-normal sm:text-[34px] md:text-[40px] text-[44px]",
  "8xl": "font-bold sm:text-5xl md:text-5xl text-6xl",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
