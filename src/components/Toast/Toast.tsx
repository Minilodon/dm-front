import React, { ReactNode } from "react";
import XIcon from "../Icons/X.svg";

interface ToastProps {
  close: () => void;
  children: ReactNode;
}

export const Toast = (props: ToastProps) => {
  const { close, children } = props;

  return (
    <div className="border-transparent bg-white rounded min-w-[360px] max-w-[500px] min-h-[60px] shadow mt-4 flex relative">
      <div>{children}</div>
      <button
        className="absolute top-6 right-6 bg-transparent text-xs cursor-pointer"
        onClick={close}
      >
        <img src={XIcon} />
      </button>
    </div>
  );
};

export default Toast;
