import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

function Card({ className, children }: Props) {
  return (
    <div
      className={`bg-white shadow-lg rounded-2xl w-full max-w-md md:max-w-2xl flex flex-col items-center justify-around p-6 sm:p-10 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
