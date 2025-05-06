import { ReactNode } from "react";

interface Props {
  cardStyle?: string;
  children: ReactNode;
}

function Card({ cardStyle, children }: Props) {
  return (
    <div
      className={`bg-white shadow-lg rounded-2xl w-full md:max-w-2xl flex flex-col items-center justify-around p-6 sm:p-10 ${cardStyle}`}
    >
      {children}
    </div>
  );
}

export default Card;
