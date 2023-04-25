import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";
import ToastContent from "../components/Toast/ToastContent";
import Toast from "../components/Toast/Toast";

type ToastTypes = "success" | "info" | "error" | "message";

interface ToastContextProps {
  addToast: (toastProps: {
    type: ToastTypes;
    message: string;
    description?: ReactNode;
    timeToClose?: number;
  }) => void;
  emitToast: boolean;
  setEmitToast: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ToastContextProviderProps {
  children: React.ReactNode;
}
interface ToastProps {
  id: string;
  content: React.ReactNode;
}

function generateUEID() {
  const first = ("000" + ((Math.random() * 46656) | 0).toString(36)).slice(-3);
  const second = ("000" + ((Math.random() * 46656) | 0).toString(36)).slice(-3);
  return first + second;
}

const ToastContext = createContext<ToastContextProps>({} as any);

export const ToastContextProvider = (props: ToastContextProviderProps) => {
  const { children } = props;
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [emitToast, setEmitToast] = useState(false);

  const closeToast = (id: string) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  };

  const addToast = React.useCallback(
    (toastProps: {
      type: ToastTypes;
      message: string;
      description?: ReactNode;
      timeToClose?: number;
    }) => {
      const uid = generateUEID();
      const content = (
        <ToastContent
          type={toastProps.type}
          message={toastProps.message}
          description={toastProps.description}
          uid={uid}
          closeToast={closeToast}
          timeToClose={toastProps.timeToClose}
        />
      );
      setToasts((currentToasts) => [...currentToasts, { id: uid, content }]);
    },
    []
  );

  const value = useMemo(
    () => ({ addToast, emitToast, setEmitToast }),
    [addToast, emitToast, setEmitToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      {createPortal(
        <div className="absolute top-20 right-5 z-20">
          {toasts.map((toast) => (
            <Toast key={toast.id} close={() => closeToast(toast.id)}>
              {toast.content}
            </Toast>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (typeof context === "undefined") {
    throw new Error("useToast must be used within a ToastContextProvider");
  }

  return context;
};
