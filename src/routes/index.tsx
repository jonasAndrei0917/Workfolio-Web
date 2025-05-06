import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "../pages/aboutMe";
import Experience from "../pages/experience";
import Layout from "../components/Layout";
import Home from "../Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/works" element={<Home />} />
          <Route path="/experience" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
