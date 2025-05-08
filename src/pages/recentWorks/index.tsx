import { useEffect, useState } from "react";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../configs/firebaseConfig";

import Card from "../../components/Card";
import Modal from "../../components/Modal";
import HorizontalScroll from "../../components/HorizontalScroll";

function Works() {
  const [recentWorks, setRecentWorks] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<any>(null);

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
        collection(doc(db, "personal-information", docData.id), "projects")
      );

      const recentWorks =
        aboutMeSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) || [];

      console.log("Experience data: ", recentWorks);
      setRecentWorks(recentWorks);

      // dispatch(setUserInfo(aboutMeData));
    } catch (error) {
      console.error("Error fetching personal information: ", error);
    }
  };

  const handleOnClick = (data: object) => {
    setSelectedWork(data);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="">
      <HorizontalScroll>
        {recentWorks?.map((work: any) => (
          <Card
            key={work.id}
            whileHover={true}
            cardStyle="w-[250px] sm:w-[300px] md:w-[350px] flex-shrink-0 cursor-pointer"
            onClick={() => handleOnClick(work)}
          >
            <h2 className="text-xl font-bold text-primary-dark text-center">
              {work.title}
            </h2>
            <img
              src={work.image}
              className="object-cover my-5"
              draggable="false"
            />
          </Card>
        ))}
        {recentWorks?.map((work: any) => (
          <Card
            key={work.id}
            whileHover={true}
            cardStyle="w-[250px] sm:w-[300px] md:w-[350px] flex-shrink-0 cursor-pointer"
            onClick={() => handleOnClick(work)}
          >
            <h2 className="text-xl font-bold text-primary-dark text-center ">
              {work.title}
            </h2>
            <h2 className="text-l font-bold text-primary-dark text-center pt-5">
              {"(Duplicate to show scroll)"}
            </h2>
            <img
              src={work.image}
              className="object-cover my-5"
              draggable="false"
            />
          </Card>
        ))}
      </HorizontalScroll>

      {/* Modal for project details */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <div className="flex flex-col items-center justify-center w-1.5xs md:w-xl h-full px-8 pb-8">
          <h2 className="text-2xl font-bold text-primary-dark p-8 text-center">
            {selectedWork?.title}
          </h2>
          <ul className="list-disc text-lg text-primary-dark space-y-2 pl-5 text-left">
            {selectedWork?.description.map((desc: string, index: number) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default Works;
