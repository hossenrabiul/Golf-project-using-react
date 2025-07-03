import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <header className="border-t">
        <nav >
          <Navbar></Navbar>
        </nav>
      </header>
        <main>
            <Outlet></Outlet>
        </main>
      <footer className="bg-[#152229] text-white">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayouts;
