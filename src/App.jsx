import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-screen">
        {/* Left */}
        <div className="w-[20%] sm:w-[16%] md:w-[12%] lg:w-[16%] bg-slate-100">
          <Menu />
        </div>
        {/* Right */}
        <div className="w-[80%] sm:w-[84%] md:w-[88%] lg:w-[85%] bg-slate-300 min-h-screen relative">
          <Navbar />
          <div className="min-h-[64vh]">
          <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
