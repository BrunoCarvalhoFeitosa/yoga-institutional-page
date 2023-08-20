import { allCourses } from "../../../data"
import { BsStarFill, BsStarHalf } from "react-icons/bs"

const AllCourses = () => {
    return (
        <div className="container mx-auto pt-[168px] pb-16">
            <div className="text-center">
                <h2 className="h2 mb-4">
                    Nossos Cursos
                </h2>
                <p className="w-[95%] lg:w-[70%] mx-auto">
                    Todos os nossos instrutores possuem no mínimo licenciatura em Educação Física e a grande maioria possui doutorado em Yoga pelas
                    universidades da Índia, país onde a prática e os conceitos ainda são muito difundidos. Todos os nossos professores 
                    estão aptos para lecionar presencialmente e também no modo on-line, todos foram treinados rigorosamente para entenderem o 
                    limite de cada aluno e principalmente as suas necessidades.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mt-12">
                {allCourses.map((course, index) => (
                    <div
                        key={index}
                        className="shadow-md py-6 px-8 rounded-md"
                    >
                        <div>
                            <h4 className="text-md font-semibold text-center">
                                {course.title}
                            </h4>
                            <div className="mt-4">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-[200px] object-cover"
                                />
                            </div>
                            <div className="flex justify-center gap-x-1">
                                <span className="text-orange font-semibold">
                                    Instrutor:
                                </span>
                                <h5>
                                    {course.teacherName}
                                </h5>
                            </div>
                            <p className="mt-3 text-md min-h-[240px]">
                                {course.desc}
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="mt-4">
                                <div className="flex items-center text-orange gap-x-2">
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarHalf />
                                </div>
                                <div>
                                    {course.price}
                                </div>
                            </div>
                            <button className="btn btn-sm btn-orange">
                                Comprar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllCourses