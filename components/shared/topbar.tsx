import React from "react";
import { ModeToggle } from "../theme-toggle-button";

const Topbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <h1>Online Exercises</h1>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Topbar;
