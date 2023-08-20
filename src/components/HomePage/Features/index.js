import React, { useState } from "react"
import ModalVideo from "react-modal-video"
import { BsPlayCircleFill } from "react-icons/bs"
import "../../../video.scss"

const Features = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="bg-section min-h-[428px] pt-8 pb-[28px] lg:pb-[150px] mt-[150px] lg:mt-[130px]">
      <div className="container mx-auto">
        <div
          className="bg-video h-[310px] bg-cover bg-center bg-no-repeat lg:h-[622px] w-full flex justify-center items-center rounded-md -mt-[150px] mb-[28px] lg:mb-20"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div
            className="text-6xl lg:text-[120px] text-orange hover:scale-110 transition  cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsPlayCircleFill />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div
            className="flex-1"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <div className="w-9 h-[2px] bg-orange mb-2 lg:w-[70px] rounded-full" />
            <div className="mb-3">
              <h2 className="h2">O melhor caminho para</h2>
              <h2 className="h2">Começar sua yoga</h2>
            </div>
          </div>
          <div
            className="ml-0"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <div className="max-w-[360px] mb-[18px] lg:mb-[38px]">
              <p>Pratique de qualquer lugar e horário. Explore um novo caminho para se exercitar e aprenda mais sobre você. Nós oferecemos o melhor serviço.</p>
            </div>
            <button className="btn btn-sm w-[200px] btn-orange">Comece agora</button>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoId="klmBssEYkdU"
      />
    </section>
  )
}

export default Features
