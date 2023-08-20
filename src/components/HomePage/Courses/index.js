import React from "react"
import { BsStarFill, BsStarHalf } from "react-icons/bs"
import { courses } from "../../../data"

const Courses = () => (
  <section className="section-sm">
    <div className="container mx-auto">
      <div
        className="mb-16 lg:mb-32 text-center"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <h2 className="h2 mb-2 lg:mb-[18px]">Cursos Populares</h2>
        <p className="max-w-[480px] mx-auto ">
          Pratique de qualquer lugar e horário. Explore um novo caminho para se exercitar e aprenda mais sobre você. Nós oferecemos o melhor serviço.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14">
        {courses.map(({ image, title, desc, link }, index) => (
          <div
            key={index}
            className="w-full bg-white hover:shadow-primary max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] flex flex-col rounded-[14px] mx-auto transition"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="-mt-[38px] lg:-mt-12 mb-4 lg:mb-6">
              <img src={image} alt="" />
            </div>
            <div>
              <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">{title}</h4>
              <p>{desc}</p>
            </div>
            <div className="flex items-center justify-between mt-8 mb-2 lg:mb-0">
              <div className="flex items-center text-orange gap-x-2">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
              <div>
                <a
                  href={link}
                  className="font-medium btn btn-sm py-2"
                >
                  {link}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-sm bg-orange text-white">Buscar por todos os cursos</button>
      </div>
    </div>
  </section>
)

export default Courses
