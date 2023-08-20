import React from "react"
import MakeYourOwnPlanCardImage from "../../../assets/img/cards/card-1.png"
import FindMentorCardImage from "../../../assets/img/cards/card-2.png"
import MeditatingCardImage from "../../../assets/img/cards/card-3.png"

const Cards = () => (
  <section
    className="bg-cardsBg min-h-[260px] pb-[55px] lg:-mt-24"
    data-aos="fade-up"
    data-aos-delay="800"
    data-aos-duration="1600"
  >
    <div className="container mx-auto flex flex-col lg:flex-row gap-x-[32px]">
      <div className="flex-1 flex gap-x-[15px] lg:gap-x-[32px] -mt-[32px] z-10 lg:-mt-[77px] mx-auto">
        <div
          className="w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px] md:min-w-[282px] bg-white lg:hover:-translate-y-6 transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="flex items-center mb-[18px] lg:mb-[28px]">
            <h3 className="text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8">Faça seu próprio plano.</h3>
            <h2 className="h2 text-stroke-2">1</h2>
          </div>
          <div>
            <img
              src={MakeYourOwnPlanCardImage}
              alt="Faça seu próprio plano"
            />
          </div>
        </div>
        <div
          className="w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px] md:min-w-[282px] bg-white lg:hover:-translate-y-6 transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex items-center mb-[18px] lg:mb-[28px]">
            <h3 className="text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8">Encontre seu professor.</h3>
            <h2 className="h2 text-stroke-2">2</h2>
          </div>
          <div>
            <img
              src={FindMentorCardImage}
              alt="Encontre seu professor"
            />
          </div>
        </div>
      </div>
      <div
        className="w-full max-w-[542px] mx-auto p-[14px] lg:p-[26px] mt-4 lg:mt-[-77px] z-10 shadow-2xl rounded-md flex justify-between items-start bg-orange-200 lg:hover:-translate-y-6 transition-all duration-500"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className="max-w-[240px]">
          <div className="flex items-center mb-4 lg:mb-8">
            <h3 className="text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8">
              Pratique de qualquer lugar
            </h3>
            <h2 className="h2 text-stroke-2">
              3
            </h2>
          </div>
          <p className="mb-4 lg:mb-3">
            Estamos expandindo nossas aulas para serem online e assim ensinarmos o máximo de pessoas possíveis.
          </p>
          <a
            href="/"
            className="text-xs lg:text-sm font-bold uppercase text-heading"
          >
            Saiba mais
          </a>
        </div>
        <div>
          <img
            src={MeditatingCardImage}
            alt="Mulher meditando"
          />
        </div>
      </div>
    </div>
  </section>
)

export default Cards
