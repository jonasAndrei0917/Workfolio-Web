import {} from "react";

import AboutMeCard from "./AboutMeCard";
import Avatar from "../../assets/avatar.png";
import Stats from "./Stats";

function AboutMe() {
  const text: string =
    "I am a passionate and curious programmer who enjoys solving problems and building useful applications. I have experience working with front-end and mobile development, especially using React Native. I'm always eager to learn new technologies, improve my skills, and collaborate with others on exciting projects.";
  return (
    <div className="flex flex-col bg-primary-bg min-h-screen">
      {/* Header */}
      <div className=" pt-5 pl-8">
        <p className="text-2xl sm:text-3xl md:text-4xl text-primary-dark font-bold">
          About Me
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col bg-primary-background flex-1 items-center justify-center p-4 sm:p-6 w-full">
        {/* Responsive layout logic */}
        <div className="flex flex-col md:flex-col w-full gap-10">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between pb-15">
            {/* Mobile: Avatar + Stats row */}
            <div className="flex flex-row items-center md:hidden w-full justify-around gap-6 pb-15">
              <img src={Avatar} className="h-24" />
              <Stats size="base" />
            </div>

            {/* Desktop: Avatar + Card row */}
            <div className="hidden md:flex flex-row justify-around w-full gap-10 items-center">
              <img src={Avatar} className="h-30 lg:h-32 xl:h-40" />
              <AboutMeCard
                text={text}
                textStyle="text-2xl text-primary-dark font-bold mb-10 text-center"
                onClick={() => console.log("Clicked")}
              />
            </div>

            {/* Mobile: Card below Avatar+Stats */}
            <div className="md:hidden">
              <AboutMeCard
                text={text}
                textStyle="text-base sm:text-lg text-primary-dark font-bold mb-6 text-center"
                onClick={() => console.log("Clicked")}
              />
            </div>
          </div>

          {/* Desktop: Stats below Avatar + Card */}
          <div className="hidden md:flex justify-center w-full">
            <Stats size="md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
