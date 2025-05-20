import { useEffect, useState } from "react";
import { collection, getDocs, doc } from "firebase/firestore";

import { db } from "../../configs/firebaseConfig";
import Card from "../../components/Card";

type FirestoreTimestamp = {
  seconds: number;
  nanoseconds: number;
};

function Experience() {
  const [experienceData, setExperienceData] = useState<any>(null);

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
        collection(doc(db, "personal-information", docData.id), "experience")
      );

      const experienceData =
        aboutMeSnapshot.docs.map((doc) => doc.data())[0] || {};
      setExperienceData(experienceData);

      // dispatch(setUserInfo(aboutMeData));
    } catch (error) {
      console.error("Error fetching personal information: ", error);
    }
  };

  const convertFirestoreTimestamp = (timestamp: FirestoreTimestamp): Date => {
    return new Date(
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1_000_000
    );
  };

  return (
    <div className="flex flex-col md:flex-row bg-primary-bg items-stretch justify-center gap-6 py-30 px-12">
      {/* Work Experience */}
      <Card className="flex-1 flex flex-col justify-start items-start">
        {experienceData &&
          experienceData.workExperience.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col border-l-2 border-primary pl-6 relative mb-6"
            >
              <p className="text-sm text-gray-text">
                {convertFirestoreTimestamp(item.startDate).getFullYear()} –{" "}
                {convertFirestoreTimestamp(item.endDate).getFullYear()}
              </p>
              <h2 className="text-xl font-bold text-primary-dark">
                {item.title}
              </h2>
              <h3 className="text-lg text-black-text">{item.organization}</h3>
              <ul className="list-disc pl-5 mt-2">
                {item.description.map((desc: string, idx: number) => (
                  <li key={idx} className="text-gray-text">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </Card>

      {/* School Experience */}
      <Card className="flex-1 flex flex-col justify-start items-start">
        {experienceData &&
          experienceData.schoolExperience.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col border-l-2 border-primary pl-6 relative mb-6"
            >
              <p className="text-sm text-gray-text">
                {convertFirestoreTimestamp(item.startDate).getFullYear()} –{" "}
                {convertFirestoreTimestamp(item.endDate).getFullYear()}
              </p>
              <h2 className="text-xl font-bold text-primary-dark">
                {item.title}
              </h2>
              <h3 className="text-lg text-black-text">{item.organization}</h3>
              <ul className="list-disc pl-5 mt-2">
                {item.description.map((desc: string, idx: number) => (
                  <li key={idx} className="text-gray-text">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </Card>
    </div>
  );
}

export default Experience;
