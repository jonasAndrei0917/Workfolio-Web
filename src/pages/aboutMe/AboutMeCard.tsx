import { ReactNode } from "react";
import Card from "../../components/Card";
import PrimaryButton from "../../components/PrimaryButton";

interface Props {
  text: string;
  textStyle?: string;
  onClick: () => void;
}

function AboutMeCard({ text, textStyle, onClick }: Props) {
  return (
    <Card>
      <p className={`${textStyle}`}>{text}</p>
      <PrimaryButton label="Download CV" onClick={onClick} />
    </Card>
  );
}
export default AboutMeCard;
