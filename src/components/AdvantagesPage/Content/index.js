import React from "react"
import { advantages } from "../../../data"

const Content = () => (
    <div className="container mx-auto pt-[168px] pb-16">
        <div className="text-center">
            <h2 className="h2 mb-4">
                Vantagens
            </h2>
            <p className="w-[95%] lg:w-[70%] mx-auto">
                A Yoga <strong>tem como objetivo trabalhar o corpo e a mente de forma interligada</strong>, 
                realizando exercícios que auxiliam no controle da ansiedade, dores no corpo e 
                estresse. Para ter todos os benefícios que ela proporciona, é preciso que as 
                práticas sejam feitas regularmente e de preferência com ajuda de profissional.
                Confira abaixo as 10 benefícios/vantagens dessa prática.
            </p>
        </div>
        <div className="w-[95%] lg:w-[70%] mx-auto mt-16">
            {advantages.map((advantage, index) => (
                <div key={index} className="mb-8">
                    <h2 className="font-bold text-lg">
                        {advantage.title}
                    </h2>
                    <p className="mt-2">
                        {advantage.desc}
                    </p>
                </div>
            ))}
        </div>
    </div>
)

export default Content