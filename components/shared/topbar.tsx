import React from "react";
import { ModeToggle } from "../theme-toggle-button";

const Topbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <h1>Nelson la rata de alcantarilla PortFolio</h1>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Topbar;
