import React from "react";
import "./Navbar.css";
import Farmacia from "../../assets/farmacia.png";

function Navbar() {
  return (
    <>
      <div className="flex w-full bg-white border-b-lime-500 py-0 border-b-2 justify-start items-star">
        <div className="flex text-center text-2xl uppercase items-center gap-4">
          <img src={Farmacia} alt="Ícone da Farmácia" className="w-28 h-28" />
        </div>

        <div className="flex text-2xl justify-center text-center items-center colorText gap-8 mx-auto">
          <div>
            <p>Início</p>
            <p>Produtos</p>
            <p>Cadastre-se</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
