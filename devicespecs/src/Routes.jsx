import { Routes, Route } from "react-router-dom";
import Home from "./routercomponents/Home";
import About from "./routercomponents/Home";
import Device from "./routercomponents/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/device" element={<Device />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
