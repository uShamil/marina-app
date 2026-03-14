import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";

import Layout from "./components/layout/Layout";

import UnderConstruction from "./pages/UnderConstruction";
import Home from "./pages/Home";
import Marinas from "./pages/Marinas";
import MarinaDetail from "./pages/MarinaDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* Ana sayfa */}
            <Route path="/" element={<Home />} />

            {/* Gerçek site */}
            <Route path="/home" element={<Home />} />
            <Route path="/marinas" element={<Marinas />} />
            <Route path="/marinas/:id" element={<MarinaDetail />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Layout dışında sayfa istersen */}
          <Route path="/under-construction" element={<UnderConstruction />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
