import React from "react";

interface IProcess {
  value: number;
  height?: number;
  borderRadius?: number;
}

const Process: React.FC<IProcess> = ({ value, height = 2, borderRadius = 0 }) => {
  return (
    <div className="atom-process" style={{
      borderRadius: borderRadius
    }}>
      <div
        className="atom-process__fill"
        style={{
          width: `${value * 100}%`,
          height: height,
          borderRadius: borderRadius
        }}
      ></div>
    </div>
  );
};

export default Process;
