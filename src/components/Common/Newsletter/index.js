import React from "react"
import { MdEmail } from "react-icons/md"

const Newsletter = () => (
  <section className="section-sm lg:section-lg bg-green min-h-[520px]">
    <div className="container mx-auto">
      <div
        className="border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <div className="mb-[14px]">
          <h4 className="text-[26px] text-white font-bold">Se inscreva na nossa Newsletter</h4>
        </div>
        <div className="mb-[12px] lg:w-[50%] lg:mx-auto lg:mb-6">
          <p className="text-green-200 text-center">
            Se inscreva na nossa Newsletter e fique sabendo em primeira mão sobre as últimas promoções e novidades que apareção em nossas unidades físicas.
          </p>
        </div>
        <form className="max-w-[752px] mx-auto">
          <div className="w-full relative flex flex-col justify-center lg:flex-row gap-y-6 lg:p-0 gap-x-4 p-4">
            <div className="relative">
              <div className="absolute top-4 left-2 w-12 h-auto flex justify-center items-center text-2xl text-green-300">
                <MdEmail />
              </div>
              <input
                type="email"
                placeholder="seu-email@dominio.com"
                className="form-control w-full border border-green-300 bg-transparent outline-none placeholder:text-green-200 text-white pl-[60px]"
                required
              />
            </div>
            <div>
              <button className="btn btn-lg btn-orange w-full lg:max-w-[180px] uppercase">Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
)

export default Newsletter