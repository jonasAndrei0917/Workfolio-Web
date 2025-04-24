import Coffee from "../../assets/coffee.png";
import Experience from "../../assets/experience.png";
import Projects from "../../assets/projects.png";

type StatSize = "base" | "md" | "lg";

function Stats({ size = "base" }: { size?: StatSize }) {
  const sizeClasses: Record<StatSize, string> = {
    base: "h-8 text-xl",
    md: "h-10 text-2xl",
    lg: "h-12 text-3xl",
  };

  const statItems = [
    { icon: Coffee, value: "5794", label: "Cups of Coffee" },
    { icon: Projects, value: "4", label: "Projects Participated" },
    { icon: Experience, value: "2", label: "Years of Experience" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-20 lg:gap-40">
      {statItems.map(({ icon, value, label }, index) => (
        <div key={index} className="flex items-center gap-4">
          <img src={icon} className={sizeClasses[size]} />
          <div>
            <p className={`font-bold text-primary-dark ${sizeClasses[size]}`}>
              {value}
            </p>
            <p className="text-black-text">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stats;
