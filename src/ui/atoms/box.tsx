import React from "react";

interface IBoxProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  color?: string;
  display?: "block" | "inline-block" | "flex";
  border?: string;
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderStyle?: "solid" | "dashed";
  borderColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  padding?: number;
  backgroundColor?: string;
  background?: string;
  width?: string;
  height?: string;
  marginLeft?: string;
  marginRight?: string;
  top?: number;
  left?: number | string;
  opacity?: number;
  overflow?: "auto" | "hidden" | "inherit" | "initial" | "revert" | "scroll" | "unset" | "visible";
  transition?: number;
  position?: "static" | "absolute" | "relative" | "fixed" | "sticky";
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Box: React.FC<IBoxProps> = ({
  children,
  className,
  color = "white",
  width = "auto",
  height = "auto",
  display = "block",
  border,
  borderTop = "1px solid transparent",
  borderLeft = "1px solid transparent",
  borderRight = "1px solid transparent",
  borderBottom = "1px solid transparent",
  borderRadius = 0,
  borderWidth = 0,
  borderStyle = "solid",
  borderColor,
  paddingVertical = 0,
  paddingHorizontal = 0,
  padding = 0,
  position = "static",
  marginLeft = "0",
  marginRight,
  backgroundColor = "transparent",
  background,
  top = "auto",
  left = "auto",
  opacity = 1,
  overflow = "hidden",
  transition = 0.5,
  onClick
}) => {
  return (
    <div
      className={["atom-box", className].join(" ")}
      style={{
        color: color,
        display: display,
        width: width,
        height: height,
        background: background,
        position: position,
        borderWidth: borderWidth,
        borderStyle: borderStyle,
        borderColor: borderColor,
        borderTop: borderTop,
        borderLeft: borderLeft,
        borderRight: borderRight,
        borderBottom: borderBottom,
        borderRadius: borderRadius,
        border: border,
        top: top,
        left: left,
        opacity: opacity,
        transition: `${transition}s`,
        marginLeft: marginLeft,
        marginRight: marginRight,
        padding: padding
          ? `${padding}px`
          : `${paddingVertical}px ${paddingHorizontal}px`,
        backgroundColor: backgroundColor,
        // cursor: onClick ? "pointer" : "default", // -> should be enabled
        overflow: overflow,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Box;
