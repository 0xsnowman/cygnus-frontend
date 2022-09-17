import React from "react";

interface IBoxProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  color?: string;
  display?: "block" | "inline-block" | "flex";
  gap?: number;
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderStyle?: "solid" | "dashed";
  borderColor?: string;
  border?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  padding?: number;
  backgroundColor?: string;
  background?: string;
  width?: string;
  height?: string;
  marginLeft?: string;
  top?: number;
  left?: number | string;
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
  borderTop = "1px solid transparent",
  borderLeft = "1px solid transparent",
  borderRight = "1px solid transparent",
  borderBottom = "1px solid transparent",
  borderRadius = 0,
  borderWidth = 0,
  borderStyle = "solid",
  borderColor,
  border,
  paddingVertical = 0,
  paddingHorizontal = 0,
  padding = 0,
  position = "static",
  marginLeft = "0",
  backgroundColor = "transparent",
  background,
  top = "auto",
  left = "auto",
  gap,
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
          background: background,
        top: top,
        left: left,
        marginLeft: marginLeft,
        padding: padding
          ? `${padding}px`
          : `${paddingVertical}px ${paddingHorizontal}px`,
        backgroundColor: backgroundColor,
        // cursor: onClick ? "pointer" : "default", // -> should be enabled
        overflow: "hidden",
        gap: gap
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Box;
