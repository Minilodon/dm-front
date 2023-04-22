import React from "react";
import Button from "../Button/Button";

interface HeaderProps {
  title: string;
  buttonLabel?: string;
  buttonAction?: React.MouseEventHandler<HTMLButtonElement>;
}

const Header = (props: HeaderProps) => {
  const { title, buttonLabel = "Clique aqui", buttonAction } = props;
  return (
    <div className="flex justify-between w-full h-20 items-center">
      <h1 className="text-xl">{title}</h1>
      <Button onClick={buttonAction} label={buttonLabel} />
    </div>
  );
};

export default Header;
