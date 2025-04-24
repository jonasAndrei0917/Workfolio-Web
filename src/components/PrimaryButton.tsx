import {} from "react";

interface Props {
  label: string;
  onClick?: () => void;
}

function PrimaryButton({ label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-full text-white text-base sm:text-lg md:text-2xl font-bold bg-primary hover:bg-primary/75 p-2 cursor-pointer flex items-center gap-2 justify-center"
    >
      {label}
    </button>
  );
}

export default PrimaryButton;
