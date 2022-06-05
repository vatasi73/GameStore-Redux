import React from "react";
import classNames from "classname";
export default function Button({ onclick, type, children, size = "s" }) {
  const btnClass = classNames({
    btn: true,
    "btn-secondary": type === "secondary",
    "btn-prymary": type === "primary",
    "btn-small": size === "s",
    "btn-medium": size === "m",
  });
  return (
    <button className={btnClass} onClick={onclick}>
      {children}
    </button>
  );
}
