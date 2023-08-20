import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { AiOutlineExpandAlt } from "react-icons/ai"
import { PiHandGrabbingLight } from "react-icons/pi"
import { VscClose } from "react-icons/vsc"
import { gallery } from "../../../data"
import WomanFirstImage from "../../../assets/img/about-us/woman-image01.jpg"
import WomanSecondImage from "../../../assets/img/about-us/woman-image02.jpg"
import WomanThirdImage from "../../../assets/img/about-us/woman-image03.jpg"

const Intro = () => {
    const [isOpenGallery, setIsOpenGallery] = useState(false)

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        breakpoints: {
            "(max-width: 640px)": {
              slides: { perView: 1, spacing: 5 },
            },
            "(min-width: 1000px)": {
              slides: { perView: 3, spacing: 0 },
            },
          },
      })

    const handleOpenGallery = () => {
        setIsOpenGallery(true)
    }

    const handleCloseGallery = () => {
        setIsOpenGallery(false)
    }

  return (
    <section className="w-full">
        <div className="container mx-auto">
            <div className="pt-[168px]">
                <div className="flex flex-col justify-center mx-auto">
                    <div className="mb-4">
                        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">
                            Yola.<br/>
                            Studio
                        </h1>
                    </div>
                    <div className="w-full flex items-center gap-x-2">
                        <div className="flex flex-col flex-1 gap-y-2">
                            <div
                                className="overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="1600"
                                onClick={handleOpenGallery}
                            >
                                <img
                                    className="opacity-85 hover:scale-150 transition-all duration-1000 cursor-zoom-in"
                                    src={WomanFirstImage}
                                    alt="Galeria de imagens"
                                />
                            </div>
                            <div
                                className="overflow-hidden"
                                data-aos="fade-down"
                                data-aos-delay="600"
                                data-aos-duration="1600"
                                onClick={handleOpenGallery}
                            >
                                <img
                                    className="opacity-85 hover:scale-150 transition-all duration-1000 cursor-zoom-in"
                                    src={WomanSecondImage}
                                    alt="Galeria de imagens"
                                />
                            </div>
                        </div>
                        <div
                            className="w-[64%] h-full overflow-hidden"
                            data-aos="fade-right"
                            data-aos-delay="800"
                            data-aos-duration="1600"
                            onClick={handleOpenGallery}
                        >
                            <img
                                className="w-full opacity-85 hover:scale-150 transition-all duration-1000 cursor-zoom-in"
                                src={WomanThirdImage}
                                alt="Galeria de imagens"
                            />
                        </div>
                    </div>
                    <div
                        className="flex justify-end items-center gap-x-2"
                        data-aos="fade-down"
                        data-aos-delay="1000"
                        data-aos-duration="1600"
                    >
                        <button
                            className="cursor-pointer"
                            onClick={handleOpenGallery}
                        >
                            <AiOutlineExpandAlt className="text-2xl text-black" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {isOpenGallery && (
            <div
                className="fixed top-0 left-0 flex flex-col item-center justify-center w-full h-[100vh] bg-gray z-50"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="400"
            >
                <div className="flex justify-end mb-4 mr-2">
                    <button
                        className="text-4xl text-black p-0 m-0"
                        onClick={handleCloseGallery}
                    >
                        <VscClose />
                    </button>
                </div>
                <div className="">
                    <div ref={sliderRef} className="flex h-[55vh] lg:h-[65vh] keen-slider">
                        {gallery.map((item) => (
                            <div className="w-full keen-slider__slide cursor-grab">
                                <img className="w-full h-full object-cover" src={item.image} alt={item.label} />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center flex-col justify-center gap-x-2">
                        <PiHandGrabbingLight className="text-3xl text-black" />
                        <p className="text-black text-sm">Clique nas imagens e arraste</p>
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Intro