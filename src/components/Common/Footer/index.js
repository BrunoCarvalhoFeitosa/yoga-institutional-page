import React from "react"
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa"
import Logo from "../../../assets/img/logo.png"

const Footer = () => (
  <footer className="p-[20px]">
    <div className="container mx-auto">
      <div className="flex flex-col justify-between items-center lg:flex-row lg:gap-y-5">
        <div>
          <a href="/">
            <img src={Logo} alt="Yola." />
          </a>
        </div>
        <div className="text-center">
          <p className="text-[14px] lg:text-[16px]">
            &copy; 2023. Todos os direitos reservados.
          </p>
          <p className="mt-4 lg:mt-0 flex flex-col lg:flex-row items-center lg:items-baseline text-[14px] lg:text-[16px] font-bold">
            Desenvolvido por
            <a
              href="https://github.com/BrunoCarvalhoFeitosa"
              rel="noreferrer"
              className="ml-1 text-[24px] font-['Sacramento']"
            >
              Bruno Carvalho Feitosa
            </a>
          </p>
        </div>
        <div className="flex items-center gap-x-4 text-orange text-lg">
          <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-md cursor-pointer hover:text-paragraph transition">
            <a
              href="https://github.com/BrunoCarvalhoFeitosa"
              target="_blank"
              rel="noreferrer"
              className="w-full h-full flex justify-center items-center"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-md cursor-pointer hover:text-paragraph transition">
            <a
              href="https://github.com/BrunoCarvalhoFeitosa"
              target="_blank"
              rel="noreferrer"
              className="w-full h-full flex justify-center items-center"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-md cursor-pointer hover:text-paragraph transition">
            <a
              href="https://github.com/BrunoCarvalhoFeitosa"
              target="_blank"
              rel="noreferrer"
              className="w-full h-full flex justify-center items-center "
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
