import React from "react";
import "./container.css";

const Container = ({ variant = "", children }) => {
  return <div className={variant + "Container"}>{children}</div>;
};

export default Container;
