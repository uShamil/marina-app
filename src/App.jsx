import { BrowserRouter, Routes, Route } from "react-router-dom";

import UnderConstruction from "./pages/UnderConstruction";
import Home from "./pages/Home";
import Marinas from "./pages/Marinas";
import MarinaDetail from "./pages/MarinaDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />

        {/* gerçek site */}
        <Route path="/home" element={<Home />} />
        <Route path="/marinas" element={<Marinas />} />
        <Route path="/marinas/:id" element={<MarinaDetail />} />
      </Routes>
    </BrowserRouter>
  );
}