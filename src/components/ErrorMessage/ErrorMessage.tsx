import React from "react";
import Icon from "../Icon/Icon";
import AlertCircle from "../Icons/AlertCircle";

interface ErrorMessageProps {
  message?: string;
}

function ErrorMessage(props: ErrorMessageProps) {
  const { message } = props;
  return (
    <div className="text-red-500 mt-[2px] font-medium text-xs leading-4 flex items-center">
      <Icon className="mr-[6px]">
        <AlertCircle />
      </Icon>
      {message}
    </div>
  );
}

export default ErrorMessage;
