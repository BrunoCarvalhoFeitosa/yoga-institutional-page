import React from "react"
import { Parallax } from "react-parallax"
import Header from '../../Common/Header'
import Image from "../../../assets/img/hero/guy.png"

const Hero = () => (
  <section className="min-h-[618px] lg:min-h-[815px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
    <div className="container mx-auto">
      <Header />
      <div className="flex flex-col items-center pt-[140px] lg:flex-row lg:items-start lg:pt-16">
        <div className="flex-1 lg:mt-[135px] sm:w-full mb-10">
          <div
            className="mb-3 lg:mb-[22px]"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <h1 className="h1">Yoga para</h1>
            <h1 className="h1">Relaxar o stress</h1>
          </div>
          <div
            className="mb-6 lg:mb-12 max-w-[480px]"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <p className="lg:text-lg">
              Yoga é uma prática física e mental que te oferece mais saúde 
              e disposição para enfrentar os problemas da vida moderna com 
              mais calma e reflexão.
            </p>
          </div>
          <div
            className="flex gap-2"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            <button className="btn btn-sm lg:btn-lg btn-orange">
              Começar
            </button>
            <button className="btn btn-sm lg:btn-lg text-heading bg-transparent border border-stroke-1 px-4 hover:bg-stroke-3 transition">
              Saiba mais
            </button>
          </div>
        </div>
        <div className="w-full bg-circle bg-cover lg:bg-none lg:w-auto">
          <div
            className="flex-1 flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="w-[234px] h-[234px] lg:w-[504px] lg:h-[840px] lg:mt-0">
              <Parallax
                className="w-full h-full p-28 lg:p-16"
                bgImage={Image}
                bgImageAlt="Instrutor praticando yoga"
                strength={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
