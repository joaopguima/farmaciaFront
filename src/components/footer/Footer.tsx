import React from 'react'
import '../footer/Footer.css'
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <div className="flex w-full bg-white border-t-lime-500 py-4 border-t-2 justify-start items-star text-center">
        <div className='flex text-center gap-2 items-center w-full justify-center colorText'>
          <p>FarmaCO - Naturale <span>|</span></p> 
          <p>Dev - João Pedro <span>|</span></p> 
          <a target='blank' href="https://www.instagram.com/joaopguima__/" className=''><FaInstagram /></a>
          <a target='blank' href="https://www.linkedin.com/in/joaopguima/"><FaLinkedin /></a>
          <a target='blank' href="https://github.com/joaopguima"><FaGithub /></a>          
          <a target='blank' href="https://wa.me/11991447668/?text=Olá João Pedro, possuo interesse em seus serviços de Desenvolvedor."><FaWhatsapp /></a>   
        </div>
      </div>
    </div>
  )
}

export default Footer