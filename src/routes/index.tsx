import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "../pages/aboutMe";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
