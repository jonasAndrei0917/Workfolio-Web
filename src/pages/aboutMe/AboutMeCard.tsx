import Card from "../../components/Card";
import PrimaryButton from "../../components/PrimaryButton";

interface Props {
  text: string;
  className?: string;
  textStyle?: string;
  onClick: () => void;
}

function AboutMeCard({ text, className, textStyle, onClick }: Props) {
  return (
    <Card className={`${className}`}>
      <p className={`${textStyle}`}>{text}</p>
      <PrimaryButton label="Download CV" onClick={onClick} />
    </Card>
  );
}
export default AboutMeCard;
