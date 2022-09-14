import React from "react";

interface IProcess {
  value: number;
}

const Process: React.FC<IProcess> = ({ value }) => {
  return (
    <div className="atom-process">
      <div
        className="atom-process__fill"
        style={{
          width: `${value * 100}%`
        }}
      ></div>
    </div>
  );
};

export default Process;
