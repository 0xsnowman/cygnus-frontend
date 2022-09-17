import React from "react";

interface IFlexProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  flexDirection?: "row" | "column";
  alignItems?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "stretch"
    | "initial";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "initial";
  borderRadius?: number;
  gap?: number;
  flex?: number;
  backgroundColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  width?: string;
  height?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
  borderColor?: string;
  border?: string;
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
}

const Flex: React.FC<IFlexProps> = ({
  children,
  className,
  flexDirection,
  alignItems = "",
  justifyContent = "",
  borderRadius = 5,
  backgroundColor = "transparent",
  paddingVertical = 0,
  paddingHorizontal = 0,
  flex = "",
  width = "auto",
  height = "auto",
  borderTop = "0px",
  borderBottom = "0px",
  borderColor,
  borderLeft,
  borderRight,
  border,
  gap = 0,
  position = "static",
}) => {
  return (
    <div
      className={["atom-flex", className].join(" ")}
      style={{
        display: "flex",
        flexDirection: flexDirection,
        backgroundColor: backgroundColor,
        flex: flex,
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        alignItems: alignItems,
        justifyContent: justifyContent,
        borderRadius: borderRadius,
        borderTop: borderTop,
        borderBottom: borderBottom,
        borderLeft: borderLeft,
        borderRight: borderRight,
        borderColor: borderColor,
          border: border,
        width: width,
        height: height,
        gap: `${gap}px`,
        position: position,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
