import React from "react";
import { useNavigate } from "react-router-dom";
import logoPng from "../../assets/images/logo.png";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "200px" }}>
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
