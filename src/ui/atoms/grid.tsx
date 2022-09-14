import React from "react";

interface IGridProps {
  children: JSX.Element | JSX.Element[];
  gap?: number;
}

const Grid: React.FC<IGridProps> = ({ children, gap }) => {
  return (
    <div
      className="atom-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: gap
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
