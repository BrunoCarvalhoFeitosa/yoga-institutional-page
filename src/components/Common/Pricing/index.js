import React, { useState } from "react"
import { pricing } from "../../../data"

const Pricing = () => {
  const [index, setIndex] = useState(0)

  return (
    <section className="bg-section py-12 lg:p-12">
      <div className="container mx-auto">
        <div
          className="text-center mb-7 lg:mb-[70px]"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <h2 className="h2 mb-3 lg:mb-[18px]">
            Escolha seu Plano
          </h2>
          <p className="max-w-[398px] mx-auto">
            Escolha um plano e inicie sua jornada conosco para melhorar seu corpo e sua mente.</p>
        </div>
        <div className="flex flex-col mx-auto items-center gap-y-5 lg:flex-row lg:gap-x-[33px]">
          {pricing.map(({ title, price, list, buttonIcon, buttonText }, currentIndex) => (
            <div
              key={currentIndex}
              className="bg-white w-full max-w-[368px] h-full relative cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="700"
              onClick={() => setIndex(currentIndex)}
            >
              <div className={`
                ${index === currentIndex
                  ? 'bg-orange text-white'
                  : 'bg-white text-heading'
                } text-center pt-[70px] pb-[34px] border-b border-stroke-3 transition
              `}>
                <div className="text-[24px] font-medium mb-[10px]">
                  {title}
                </div>
                <div className="text-[34px] font-semibold">
                  {price}
                </div>
              </div>
              <div className="px-[30px] pt-[18px] pb-[30px]">
                <div>
                  <p className="text-center mb-6 text-sm">Descubra o plano ideal</p>
                </div>
                <div>
                  <ul className="flex flex-col gap-3 mb-10">
                    {list.map(({ icon, name }, index) => (
                      <li
                        key={index}
                        className="border border-r-green border-stroke-3 p-4 rounded-md flex items-center gap-4 hover:bg-stroke-3 transition"
                      >
                        <div className="flex justify-center items-center bg-green-100 w-7 h-70 text-2xl text-green-300 rounded-full">{icon}</div>
                        <div>{name}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <button className={`
                    ${index === currentIndex
                      ? "bg-orange text-white"
                      : "border-orange"
                    } w-full h-[50px] rounded border  font-medium transition relative
                  `}>
                    {buttonText}
                    <div className={`
                      ${index === currentIndex
                      ? "bg-orange-200"
                      : "bg-orange"
                    } w-[50px] h-[50px] flex justify-center items-center absolute top-[-1px] right-[-1px] rounded text-white
                    `}>{buttonIcon}</div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing