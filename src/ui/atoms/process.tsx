import React from "react";

interface IProcess {
  value: number;
  height?: number;
  borderRadius?: string;
  transition?: number;
}

const Process: React.FC<IProcess> = ({
  value,
  height = 6,
  borderRadius,
  transition = 0.4,
}) => {
  return (
    <div
      className="atom-process"
      style={{
        borderRadius: borderRadius,
      }}
    >
        <div
          className="atom-process__fill"
          style={{
            width: `${value * 100}%`,
            height: height,
            borderRadius: borderRadius,
            transition: `${transition}s`,
          }}
        ></div>
      </div>
  );
};

export default Process;
