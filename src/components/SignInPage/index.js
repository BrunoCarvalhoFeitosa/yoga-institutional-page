import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Parallax } from "react-parallax"
import { MdEmail } from "react-icons/md"
import { BiSolidHide, BiShowAlt } from "react-icons/bi"
import Image from "../../assets/img/hero/guy.png"
import Header from "../Common/Header"

const schema = yup.object({
    user_email:
        yup
            .string()
            .email()
            .required("O campo e-mail é obrigatório."),
    user_password:
        yup
            .string()
            .required("O campo senha é obrigatório."),
}).required()

const SignIn = () => {
    const [passIsVisible, setPassIsVisible] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handleShowOrHidePass = () => {
        setPassIsVisible(!passIsVisible)
    }

    const onSubmit = (data) => {
        console.log(data)

        toast.success(`Acesso autorizado.`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return (
      <section className="min-h-[618px] lg:min-h-[100vh] pt-[136px] lg:pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top flex justify-center items-center">
        <div className="container mx-auto">
            <Header />
            <div className="flex flex-col lg:flex-row items-center lg:gap-x-20">
                <div className="w-[100%] lg:w-[60%] mx-auto bg-white p-8 rounded-md">
                    <div className="w-full flex justify-center mb-5">
                        <h2 className="h2">Login</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-y-4">
                            <div className="relative">
                                <MdEmail className="absolute top-[50%] translate-y-[-50%] left-3 w-6 h-6 text-orange/50" />
                                <input
                                    type="email"
                                    className="form-control pl-12 p-6"
                                    placeholder="Insira seu e-mail cadastrado"
                                    {...register('user_email')}
                                />
                            </div>
                            {errors.user_email && (
                                <p className="error-message">{errors.user_email.message}</p>
                            )}
                            <div className="relative">
                                <button type="button" onClick={() => handleShowOrHidePass()}>
                                    {passIsVisible ? (
                                        <BiShowAlt
                                            className="absolute top-[50%] translate-y-[-50%] left-3 w-6 h-6 text-orange/50"
                                        />
                                    ) : (
                                        <BiSolidHide
                                            className="absolute top-[50%] translate-y-[-50%] left-3 w-6 h-6 text-orange/50"
                                        />
                                    )}
                                </button>
                                <input
                                    type={passIsVisible ? "text" : "password"}
                                    className="form-control pl-12 p-6"
                                    placeholder="Insira sua senha cadastrada"
                                    {...register('user_password')}
                                />
                            </div>
                            {errors.user_password && (
                                <p className="error-message">{errors.user_password.message}</p>
                            )}
                            <div className="mt-0">
                                <div className="flex justify-end items-center gap-x-2 text-sm text-center text-orange">
                                    <p className="text-sm text-orange cursor-pointer underline">
                                        Esqueceu sua senha?
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-orange w-full uppercase"
                                >
                                    Entrar
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="mt-6 text-center text-sm">
                        <p>Não tem uma conta ainda?</p>
                        <p>Relaxe e crie ela
                            <a
                                className="text-orange underline cursor-pointer ml-1"
                                href="/cadastre-se"
                                rel="noreferrer"
                            >
                                aqui
                        </a>
                        </p>
                    </div>
                </div>
                <div className="hidden lg:flex mt-28 flex-1 w-full min-h-[504px] lg:w-[504px] lg:h-[785px] lg:mt-36">
                    <Parallax
                        className="w-full h-full p-28 lg:p-16"
                        bgImage={Image}
                        bgImageAlt="Instrutor praticando yoga"
                        strength={200}
                    />
                </div>
            </div>
        </div>
        <ToastContainer />
      </section>
    )
}


export default SignIn
