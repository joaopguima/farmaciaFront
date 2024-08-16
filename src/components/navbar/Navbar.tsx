import React from "react";
import "./Navbar.css";
import Farmacia from "../../assets/farmacia.png";
import { IoIosLogIn } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex w-full bg-white border-b-lime-500 py-0 border-b-2 justify-start">
        <div className="flex text-center text-2xl uppercase items-center gap-4">
          <button type="submit"><img src={Farmacia} alt="Ícone da Farmácia" className="w-28 h-28" /></button>
        </div>

        <div className="flex space-x-24 justify-center text-center gap-8 colorText  mx-auto">
          <div className="flex space-x-4 justify-center text-center items-center mx-auto text-xl">
            <Link to='/' className="hover:text-lime-500">Início</Link><span>|</span>
            <Link to='/produtos' className="hover:text-lime-500">Produtos</Link><span>|</span>
            <Link to='/categoria' className="hover:text-lime-500">Categoria</Link><span>|</span>
            <Link to='' className="hover:text-lime-500">Cadastrar Categoria</Link>
          </div>
        </div>

        <div className="flex items-center">
          <div className="colorText gap-4 mr-10 text-xl">
          <Link to='/login' className="hover:text-lime-500">Entrar</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
