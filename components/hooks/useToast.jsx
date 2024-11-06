"use client";

import { useContext, createContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const toast = async (content) => {
    setMessage(content);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 7000);
  };

  return (
    <ToastContext.Provider value={{ toast, message }}>
      {children}
      {toastVisible && (
        <div className="fixed bottom-5 left-5 h-16 w-96 rounded-lg shadow-lg overflow-hidden border-4 border-green-600 bg-white">
          <div className="relative flex items-center h-full">
            <span className="absolute top-0 -translate-x-1/2 h-full w-16 rounded-full bg-green-600" />
            <span className="pl-10">
            {message}
            </span>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
