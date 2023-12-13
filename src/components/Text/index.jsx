import React from "react";

const sizeClasses = {
  txtRobotoBold16Gray800: "font-bold font-roboto",
  txtRobotoRegular16Blue100: "font-normal font-roboto",
  txtRobotoRegular128: "font-normal font-roboto",
  txtRobotoBold20Gray800: "font-bold font-roboto",
  txtRobotoRegular16Gray600: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoBold16: "font-bold font-roboto",
  txtRobotoMedium12: "font-medium font-roboto",
  txtRobotoBold64: "font-bold font-roboto",
  txtRobotoBold20: "font-bold font-roboto",
  txtRobotoRegular16Black90099: "font-normal font-roboto",
  txtRobotoRegular16Gray800: "font-normal font-roboto",
  txtRobotoBold32: "font-bold font-roboto",
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
