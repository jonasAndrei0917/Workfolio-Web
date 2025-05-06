import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  let location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  // Set the active link with a delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveLink(location.pathname); // Set the active link after a delay
    }, 500); // 1-second delay

    return () => clearTimeout(timeout); // Cleanup timeout
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

  const linkStyle = (path: string) => (activeLink === path ? "font-bold" : ""); // Apply "font-bold" after the delay

  return (
    <nav className="fixed top-0 w-full bg-primary-background text-primary-dark p-4 flex items-center">
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
