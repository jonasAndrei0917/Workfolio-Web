import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import AboutMe from "./pages/aboutMe";
import Experience from "./pages/experience";
import Works from "./pages/recentWorks";
import ContactMe from "./pages/contactMe";

function Home() {
  const navigate = useNavigate();

  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: worksRef, inView: worksInView } = useInView({ threshold: 0.5 });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.5,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (aboutInView) navigate("/about", { replace: true });
    else if (worksInView) navigate("/works", { replace: true });
    else if (experienceInView) navigate("/experience", { replace: true });
    else if (contactInView) navigate("/contact", { replace: true });
  }, [aboutInView, worksInView, experienceInView, contactInView, navigate]);

  return (
    <div className="flex flex-col scroll-smooth">
      <div ref={aboutRef} id="about">
        <AboutMe />
      </div>

      <div ref={worksRef} id="works">
        <Works />
      </div>

      <div ref={experienceRef} id="experience">
        <Experience />
      </div>

      <div ref={contactRef} id="contact">
        <ContactMe />
      </div>
    </div>
  );
}

export default Home;
