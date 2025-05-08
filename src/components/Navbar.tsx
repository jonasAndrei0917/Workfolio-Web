import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  let location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const getTitle = () => {
    switch (location.pathname) {
      case "/about":
        return "About Me";
      case "/contact":
        return "Contact Me";
      case "/experience":
        return "Experience";
      case "/works":
        return "Recent Works";
      default:
        return "About Me";
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkStyle = (path: string) => (activeLink === path ? "font-bold" : "");

  return (
    <nav className="fixed top-0 w-full bg-primary-background text-primary-dark p-5 px-8 flex items-center z-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-primary-dark font-bold">
        {getTitle()}
      </h1>

      <div className="flex flex-1 justify-center gap-8 px-4">
        <Link
          to="/"
          onClick={() => scrollToSection("about")}
          className={linkStyle("/about")}
        >
          About Me
        </Link>
        <Link
          to="/works"
          onClick={() => scrollToSection("works")}
          className={linkStyle("/works")}
        >
          Recent Works
        </Link>
        <Link
          to="/experience"
          onClick={() => scrollToSection("experience")}
          className={linkStyle("/experience")}
        >
          Experience
        </Link>
        <Link
          to="/contact"
          onClick={() => scrollToSection("contact")}
          className={linkStyle("/contact")}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
