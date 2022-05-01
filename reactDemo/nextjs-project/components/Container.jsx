import React, { cloneElement, createElement } from "react";

const style = {
  width: "100%",
  maxWidth: "1200px",
  marginLeft: "auto",
  marginRight: "auto",
};

// function defaultContainer({ children, style }) {
//   return <div style={style}>{children}</div>;
// }

function createDefailtElement({ style, children }) {
  return createElement("div", { style }, [children]);
}

export default function Container({
  children,
  renderer = createDefailtElement({ style, children }),
}) {
  return cloneElement(renderer, {
    style: Object.assign({}, renderer.props.style, style),
    children,
  });
}
