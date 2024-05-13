import React from "react";
import { ModeToggle } from "../theme-toggle-button";
import Image from "next/image";

const Topbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <Image
            className="rounded-full"
            alt="avatar"
            src={"/assets/nelson.jpeg"}
            width={50}
            height={50}
          />
          <h1>Nelson la rata de alcantarilla PortFolio</h1>
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Topbar;
