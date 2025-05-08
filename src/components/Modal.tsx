import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 sm:px-10 px-5">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-gray-500 hover:text-black text-4xl cursor-pointer"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
