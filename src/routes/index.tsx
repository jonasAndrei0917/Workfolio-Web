import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../Home";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/works" element={<Home />} />
          <Route path="/experience" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
