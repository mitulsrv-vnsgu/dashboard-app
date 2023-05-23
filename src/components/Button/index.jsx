import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder30: "rounded-[30px]",
  icbRoundedBorder27: "rounded-[27px]",
};
const variants = {
  FillGray30033: "bg-gray_300_33 text-gray_300",
  OutlineGray30033: "border border-gray_300_33 border-solid text-blue_gray_50",
  FillTeal50: "bg-teal_50 text-blue_gray_700",
  FillBluegray700: "bg-blue_gray_700 text-gray_300",
  icbOutlineBluegray700: "border border-blue_gray_700 border-solid",
  icbOutlineGray300: "border border-gray_300 border-solid",
  icbFillWhiteA700: "bg-white_A700",
  icbFillWhiteA70042: "bg-white_A700_42",
  icbFillTeal501c: "bg-teal_50_1c",
};
const sizes = { sm: "p-[13px]", smIcn: "p-3.5", mdIcn: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CircleBorder30", "icbRoundedBorder27"]),
  variant: PropTypes.oneOf([
    "FillGray30033",
    "OutlineGray30033",
    "FillTeal50",
    "FillBluegray700",
    "icbOutlineBluegray700",
    "icbOutlineGray300",
    "icbFillWhiteA700",
    "icbFillWhiteA70042",
    "icbFillTeal501c",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
