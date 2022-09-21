import React from "react";

interface IProcess {
  value: number;
  height?: number;
  borderRadius?: string;
  transition?: number;
}

const Process: React.FC<IProcess> = ({
  value,
  height = 4,
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
        className="atom-process__line"
        style={{
          borderRight: "1px solid white",
            width: "85%"
        }}
      >
        <div
          className="atom-process__fill"
          style={{
            width: `${value * 185}%`,
            height: height,
            borderRadius: borderRadius,
            transition: `${transition}s`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Process;
