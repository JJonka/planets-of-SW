import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import PlanetDetails from "./pages/planetDetails/PlanetDetails";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/planets/:planetName" element={<PlanetDetails />} />
  </Routes>
);

export default App;
