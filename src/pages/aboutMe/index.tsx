import { useEffect, useState } from "react";
import { collection, getDocs, doc } from "firebase/firestore";

import { db } from "../../configs/firebaseConfig";
import AboutMeCard from "./AboutMeCard";
import Avatar from "../../assets/avatar.png";
import Stats from "./Stats";

function AboutMe() {
  const [aboutMeData, setAboutMeData] = useState<any>(null);
  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "personal-information")
      );
      const docData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))[0];

      if (!docData) {
        console.log("No documents found in personal-information collection.");
        return;
      }

      const aboutMeSnapshot = await getDocs(
        collection(doc(db, "personal-information", docData.id), "about-me")
      );

      const aboutMeData =
        aboutMeSnapshot.docs.map((doc) => doc.data())[0] || {};
      console.log("About Me Data: ", aboutMeData);
      setAboutMeData(aboutMeData);

      // dispatch(setUserInfo(aboutMeData));
    } catch (error) {
      console.error("Error fetching personal information: ", error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="flex flex-col bg-primary-bg min-h-screen pt-35 sm:pt-20 md:pt-0">
      {/* Content */}
      <div className="flex flex-col bg-primary-background flex-1 items-center justify-center p-4  w-full">
        {/* Responsive layout logic */}
        <div className="flex flex-col md:flex-col w-full ">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Mobile: Avatar + Stats row */}
            <div className="flex flex-row items-center sm:pt-10 md:hidden w-full justify-around gap-6 pb-15">
              <img src={Avatar} className="h-24" />
              <Stats size="base" details={aboutMeData} />
            </div>

            {/* Desktop: Avatar + Card row */}
            <div className="hidden md:flex flex-row justify-around w-full gap-10 items-center md:mx-10 lg:mx-0">
              <img src={Avatar} className="h-30 lg:h-32 xl:h-40" />
              <AboutMeCard
                text={aboutMeData?.description}
                textStyle="text-xl xl:text-2xl text-primary-dark font-bold mb-10 text-center"
                onClick={() => console.log("Clicked")}
              />
            </div>

            {/* Mobile: Card below Avatar + Stats */}
            <div className="md:hidden mx-5 sm:mx-10">
              <AboutMeCard
                text={aboutMeData?.description}
                textStyle="text-base sm:text-lg text-primary-dark font-bold mb-6 text-center"
                onClick={() => console.log("Clicked")}
              />
            </div>
          </div>

          {/* Desktop: Stats below Avatar + Card */}
          <div className="hidden md:flex justify-center w-full pt-15">
            <Stats size="md" details={aboutMeData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
