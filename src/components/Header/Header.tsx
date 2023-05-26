import React from "react";
import Button from "../Button/Button";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  buttonLabel?: string;
  buttonAction?: React.MouseEventHandler<HTMLButtonElement>;
}

const Header = (props: HeaderProps) => {
  const { title, buttonLabel = "Clique aqui", buttonAction } = props;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-between w-full h-20 items-center">
      <div className="flex items-center gap-x-4">
        <FaArrowLeft className="cursor-pointer" onClick={handleGoBack} />
        <h1 className="text-xl">{title}</h1>
      </div>
      <Button onClick={buttonAction} label={buttonLabel} />
    </div>
  );
};

export default Header;
