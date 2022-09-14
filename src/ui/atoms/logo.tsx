import React from "react";
import { useNavigate } from "react-router-dom";
import logoPng from "../../assets/icons/logo.png";

const Logo = () => {
  const navigate = useNavigate();
  
  return (
    <img
      className="atom-logo"
      onClick={() => {
        navigate("/");
      }}
      src={logoPng}
      alt="logo"
    />
  );
};

export default Logo;
