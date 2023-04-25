import React, { ReactNode, useState } from "react";
import { useTimeoutFn } from "react-use";
import { useToast } from "../../contexts/ToastContext";
import AlertIcon from "../Icons/AlertIcon.svg";
import MessageIcon from "../Icons/MessageIcon.svg";
import SuccessIcon from "../Icons/SuccessIcon.svg";
import ErrorIcon from "../Icons/ErrorIcon.svg";

interface ToastProps {
  type: "success" | "error" | "info" | "message";
  message: string;
  description?: ReactNode;
  uid: string;
  closeToast: (id: string) => void;
  timeToClose?: number;
}

const ToastContent = (props: ToastProps) => {
  const {
    message,
    type,
    description,
    uid,
    closeToast,
    timeToClose = 5,
  } = props;
  const [isTyping, setIsTyping] = useState(false);
  const { addToast } = useToast();

  const icon =
    type === "success" ? (
      <img src={SuccessIcon} alt="ícone de sucesso" className="w-10 h-10" />
    ) : type === "error" ? (
      <img src={ErrorIcon} alt="ícone de erro" className="w-10 h-10" />
    ) : type === "message" ? (
      <img src={MessageIcon} alt="ícone de mensagem" className="w-10 h-10" />
    ) : (
      <img src={AlertIcon} alt="ícone de aviso" className="w-10 h-10" />
    );

  const [, cancel, reset] = useTimeoutFn(() => {
    closeToast(uid);
  }, timeToClose * 1000);

  const handleSubmit = () => {
    closeToast(uid);
  };

  return (
    <div
      className="flex items-center justify-center flex-col pt-3 pr-4 pb-[14px] pl-4"
      onMouseOver={() => {
        cancel();
      }}
      onMouseLeave={() => {
        if (isTyping) return;
        reset();
      }}
    >
      <div className="flex justify-end w-full">
        <div className="flex-1 mr-4">
          <div className="w-10 h-10">{icon}</div>
        </div>
        <div className="flex-[10] mr-14 mt-1 flex flex-col">
          <span className="font-medium">{message}</span>
          <div className="text-[#667085]">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ToastContent;
