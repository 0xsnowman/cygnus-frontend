import React from "react";

interface IGridItemProps {
  children: JSX.Element | JSX.Element[];
  columns: number;
}

const GridItem: React.FC<IGridItemProps> = ({ children, columns }) => {
  return (
    <div
      className="atom-griditem"
      style={{ gridColumnStart: `span ${columns}` }}
    >
      {children}
    </div>
  );
};

export default GridItem;
