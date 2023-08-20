import React from "react"
import CountUp from "react-countup"
import Image from "../../../assets/img/john-cena.png"
import { facts } from "../../../data"

const Facts = () => (
  <section className="sectiom-sm lg:section-lg">
    <div className="container mx-auto flex flex-col lg:flex-row lg:gap-x-[30px]">
      <div className="flex-1 flex flex-wrap gap-x-[5%] gap-y-[35px]">
        {facts.map(({ startNumber, endNumber, unit, title, desc }, index) => (
          <div key={index} className="w-[45%]">
            <div className="mb-2 lg:mb-4">
              <h2 className="h2">
                <CountUp
                  start={startNumber}
                  end={endNumber}
                  duration={2}
                  enableScrollSpy
                />
                {unit}+
              </h2>
            </div>
            <div className="mb-3">
              <h3 className="tex-cl font-bold text-heading">
                {title}
              </h3>
            </div>
            <div>
              <p className="max-w-[240px]">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col justify-center h-full lg:pl-[100px] -order-1 lg:order-none">
        <div
          className="mb-12 max-w-[295px] md:max-w-none"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <h2 className="h2">Relaxe e curta um dia diferenciado de yoga conosco.</h2>
        </div>
        <div
          className="mb-2"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <img src={Image} alt="Jogn Cena" />
        </div>
        <div
          className="text-lg mb-6 font-bold text-heading"
          data-aos="fade-down"
          data-aos-delay="800"
        >
          John Cena <span className="text-base text-paragraph font-normal">/ Fundador</span>
        </div>
      </div>
    </div>
  </section>
)

export default Facts
