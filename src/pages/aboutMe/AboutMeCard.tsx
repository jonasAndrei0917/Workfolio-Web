import Card from "../../components/Card";
import PrimaryButton from "../../components/PrimaryButton";

interface Props {
  text: string;
  cardStyle?: string;
  textStyle?: string;
  onClick: () => void;
}

function AboutMeCard({ text, cardStyle, textStyle, onClick }: Props) {
  return (
    <Card cardStyle={`${cardStyle}`}>
      <p className={`${textStyle}`}>{text}</p>
      <PrimaryButton label="Download CV" onClick={onClick} />
    </Card>
  );
}
export default AboutMeCard;
