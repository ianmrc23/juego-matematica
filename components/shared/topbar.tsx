import React from "react";
import { ModeToggle } from "../theme-toggle-button";
import Image from "next/image";

const Topbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <div className="rounded-sm">
          <Image alt="avatar"  src={"/public/assest/nelson.jpeg"} width={20} height={20} />
        </div>
        <h1>Nelson la rata de alcantarilla PortFolio</h1>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Topbar;
