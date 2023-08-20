import React from "react"
import { teachers } from "../../../data"

const Texts = () => {
  return (
    <section className="w-full">
        <div className="container mx-auto mt-8 lg:mt-28">
            <div
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="3600"
            >
                <h2 className="h2 font-bold text-center">
                    Nossas instalações
                </h2>
                <p className="text-center mt-3 w-[95%] lg:w-[70%] mx-auto">
                    Possuímos 6 estúdios localizados em São Paulo, 2 no Paraná, 3 em Minas Gerais e 4 no Rio de Janeiro. 
                    Todos estes estúdios contam com ótimas instalações e equipamentos. Todo aluno tem seu equipamento 
                    individual fornecido por nós, todas as salas contam com equipamentos de segurança, que incluem extintores 
                    de incêncio supervisionados rigorosamente e possuímos um brigadista para casos iminentes de incêndio.
                </p>
                <p className="text-center mt-3 w-[95%] lg:w-[70%] mx-auto">
                    Em cada estúdio contamos com 10 salas, em cada uma existe um instrutor altamente capacitado que trata
                    de cada tema da yoga individualmente com a sua classe, contamos com uma sala exclusiva para os alunos
                    da modalidade on-line. Estes alunos da modalidade on-line recebem em suas casas os materais necessários 
                    para suas aulas sem nenhum custo adicional. 
                </p>
                <p className="text-center mt-3 w-[95%] lg:w-[70%] mx-auto">
                    Possuímos 2 saunas, uma destinada para homens e outra para mulheres, acreditamos que o relaxamento vai
                    muito do que as aulas em si podem proporcionar, também possuímos uma sala destinada ao café e ao chá.
                    Contamos com um time particular de ortopedistas, odos licenciados e 
                    aptos para te atender durante suas aulas conosco. 
                </p>
            </div>
            <div
                className="mt-12"
                data-aos="fade-left"
                data-aos-delay="800"
                data-aos-duration="3600"
            >
                <h2 className="h2 font-bold text-center">
                    Equipamentos
                </h2>
                <p className="text-center mt-3 w-[95%] lg:w-[70%] mx-auto">
                    Com mais de 22 anos de existência no mercado, temos orgulho das parcerias que fizemos ao longo desses anos,
                    contamos com as melhores marcas de materiais esportivos, das quais podemos incluir a Nike, Adidas, Puma, Under Armour 
                    entre outros. Estas marcas nos fornecem regularmente os materiais que repassamos aos nossos alunos como calçados, camisetas,
                    tapetes de yoga e até garrafas térmicas.
                </p>
                <p className="text-center mt-3 w-[95%] lg:w-[70%] mx-auto">
                    Através destes equipamentos, podemos proporcionar aos nossos alunos o máximo conforto antes, durante e depois das aulas,
                    já que este material é dado ao aluno. Estamos em constante contato com estes parceiros para o fornecimento de materiais para
                    os alunos remanescentes também.
                </p>
                <p className="text-center mt-3 w-[95%] lg:w-[70%] mx-auto">
                    No caso dos tapetes e bolas de pilates, possúimos um armário com tranca para cada aluno, como são materais de difícil transporte,
                    é muito mais fácil mante-los em nossos estúdios para a comodidade do próprio aluno, caso algum aluno tenha interesse nas aulas da modalidade
                    on-line, ele pode levar estes materais para a sua residência sem quaisquer problemas.
                </p>
            </div>
            <div
                className="mt-12 pb-24"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="2600"
            >
                <h2 className="h2 font-bold text-center">
                    Instrutores
                </h2>
                <p className="text-center mt-3 w-[95%] lg:w-[70%] mx-auto">
                    Com mais de 22 anos de existência no mercado, temos orgulho das parcerias que fizemos ao longo desses anos,
                    contamos com as melhores marcas de materiais esportivos, das quais podemos incluir a Nike, Adidas, Puma, Under Armour 
                    entre outros. Estas marcas nos fornecem regularmente os materiais que repassamos aos nossos alunos como calçados, camisetas,
                    tapetes de yoga e até garrafas térmicas.
                </p>
                <div className="mt-6">
                    <div
                        className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 items-center"
                        data-aos="fade-left"
                        data-aos-delay="700"
                        data-aos-duration="1600"
                    >
                        {teachers.map((teacher, index) => (
                            <div key={index}>
                                <div className="">
                                    <div className="mb-1 overflow-hidden">
                                        <img
                                            src={teacher.teacherPicture}
                                            alt={teacher.teacherName}
                                            className="h-[280px] object-cover hover:scale-125 transition-all duration-150 cursor-zoom-in"
                                        />
                                    </div>
                                </div>
                                    <div>
                                        <h4 className="text-center text-sm text-paragraph">
                                            {teacher.teacherName}
                                        </h4>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Texts