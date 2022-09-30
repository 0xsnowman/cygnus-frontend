import React from "react";
import { useNavigate } from "react-router-dom";
import logoPng from "../../assets/backgrounds/Planet.png";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "50px" }}>
      <img
        className="atom-logo"
        onClick={() => {
          navigate("/");
        }}
        src={logoPng}
        alt="logo"
        width="100%"
      />
    </div>
  );
};

export default Logo;
