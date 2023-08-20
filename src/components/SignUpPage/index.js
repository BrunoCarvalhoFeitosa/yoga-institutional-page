import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { getAddress } from "../../services/getAddress"
import { cepFormatMask } from "../../services/formatters"
import { Parallax } from "react-parallax"
import { MdEmail } from "react-icons/md"
import { BiSolidHide, BiShowAlt, BiUser } from "react-icons/bi"
import { LiaStreetViewSolid } from "react-icons/lia"
import { GiModernCity } from "react-icons/gi"
import Header from "../Common/Header"
import Image from "../../assets/img/hero/guy.png"

const schema = yup.object({
    user_completeName:
        yup
            .string()
            .matches(/^[A-Za-z ]*$/, "Por favor, insira um nome válido.")
            .max(70)
            .min(12, "Por favor, insira corretamente seu nome completo.")
            .required("O campo nome completo é obrigatório."),
    user_addressPostalCode:
        yup
            .string()
            .max(9)
            .required("O campo CEP é obrigatório."),
    user_addressNumber:
        yup
            .string()
            .max(5, "Por favor, insera um número válido.")
            .required("O campo número é obrigatório."),
    user_email:
        yup
            .string()
            .email('Por favor, insira um e-mail válido.')
            .required("O campo e-mail é obrigatório."),
    user_password:
        yup
            .string()
            .required("O campo senha é obrigatório."),

}).required()

const SignUp = () => {
    const [passIsVisible, setPassIsVisible] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })


    const handleShowOrHidePass = () => {
        setPassIsVisible(!passIsVisible)
    }

    const handlePostalCodeAutocomplete = async (ev) => {
        cepFormatMask(ev)
        const postalCode = ev.target.value.replace(/\D/g, "")

        if (postalCode.length === 8) {
            const search = await getAddress(postalCode)
            const { data } = search
            setValue('user_addressStreet', data.logradouro)
            setValue('user_addressNeighborhood', data.bairro)
            setValue('user_addressCity', data.localidade)
            setValue('user_addressState', data.uf)
        }
    }

    const onSubmit = (data) => {
        toast.success(`${getValues("user_completeName")} seu cadastro foi efetuado com sucesso.`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })

        reset()
    }

    return (
      <section className="min-h-[618px] lg:min-h-[100vh] pt-[136px] lg:pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top flex justify-center items-center">
        <div className="container mx-auto">
            <Header />
            <div className="flex flex-col lg:flex-row items-center lg:gap-x-20">
                <div className="w-[100%] lg:w-[60%] mx-auto bg-white p-8 lg:pt-16 rounded-md">
                    <div className="w-full flex justify-center mb-5">
                        <h2 className="h2">Cadastre-se</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-y-4">
                            <div className="relative">
                                <BiUser className="absolute top-[50%] translate-y-[-50%] left-3 w-6 h-6 text-orange/50" />
                                <input
                                    type="text"
                                    className="form-control pl-12 p-6"
                                    placeholder="Insira seu nome completo"
                                    {...register('user_completeName')}
                                />
                            </div>
                            {errors.user_completeName && (
                                <p className="error-message">{errors.user_completeName.message}</p>
                            )}
                            <div className="relative flex-1">
                                <LiaStreetViewSolid className="absolute top-[50%] translate-y-[-50%] left-3 w-7 h-7 text-orange/50" />
                                <input
                                    type="text"
                                    className="form-control pl-12 p-6"
                                    placeholder="Insira seu CEP"
                                    {...register('user_addressPostalCode')}
                                    onKeyUp={handlePostalCodeAutocomplete}
                                />
                            </div>
                            {errors.user_addressPostalCode && (
                                <p className="error-message">{errors.user_addressPostalCode.message}</p>
                            )}
                            <div className="flex flex-col gap-y-4 lg:flex-row items-center justify-between">
                                <div className="relative">
                                    <GiModernCity className="absolute top-[50%] translate-y-[-50%] left-3 w-6 h-6 text-orange/50" />
                                    <input
                                        type="text"
                                        className="form-control pl-12 p-6 cursor-not-allowed"
                                        placeholder="Rua/Logradouro"
                                        {...register('user_addressStreet')}
                                        disabled
                                    />
                                </div>
                                {errors.user_addressStreet && (
                                    <p className="error-message">{errors.user_addressStreet.message}</p>
                                )}
                                <div className="relative">
                                    <GiModernCity className="absolute top-[50%] translate-y-[-50%] left-3 w-6 h-6 text-orange/50" />
                                    <input
                                        type="text"
                                        className="form-control pl-12 p-6 cursor-not-allowed"
                                        placeholder="Bairro"
                                        {...register('user_addressNeighborhood')}
                                        disabled
                                    />
                                </div>
                                {errors.user_addressNeighborhood && (
                                    <p className="error-message">{errors.user_addressNeighborhood.message}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-y-4 lg:flex-row items-center gap-x-4">
                                <div className="relative">
                                    <GiModernCity className="absolute top-[50%] translate-y-[-50%] left-3 w-6 h-6 text-orange/50" />
                                    <input
                                        type="text"
                                        className="form-control pl-12 p-6 cursor-not-allowed w-full"
                                        placeholder="Cidade"
                                        {...register('user_addressCity')}
                                        disabled
                                    />
                                </div>
                                {errors.user_addressCity && (
                                    <p className="error-message">{errors.user_addressCity.message}</p>
                                )}
                                <div className="relative">
                                    <GiModernCity className="absolute top-[50%] translate-y-[-50%] left-3 w-6 h-6 text-orange/50" />
                                    <input
                                        type="text"
                                        className="form-control pl-12 p-6 cursor-not-allowed w-full"
                                        placeholder="Estado"
                                        {...register('user_addressState')}
                                        disabled
                                    />
                                </div>
                                {errors.user_addressState && (
                                    <p className="error-message">{errors.user_addressState.message}</p>
                                )}
                                <div className="relative">
                                    <GiModernCity className="absolute top-[50%] translate-y-[-50%] left-3 w-6 h-6 text-orange/50" />
                                    <input
                                        type="text"
                                        className="form-control pl-12 p-6 lg:w-[150px]"
                                        placeholder="N°"
                                        {...register('user_addressNumber')}
                                        maxLength="5"
                                    />
                                </div>
                            </div>
                            {errors.user_addressNumber && (
                                <p className="error-message">{errors.user_addressNumber.message}</p>
                            )}
                            <div className="relative">
                                <MdEmail className="absolute top-[50%] translate-y-[-50%] left-3 w-6 h-6 text-orange/50" />
                                <input
                                    type="email"
                                    className="form-control pl-12 p-6"
                                    placeholder="Insira um e-mail para a plataforma"
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
                                    placeholder="Insira uma senha para a plataforma"
                                    {...register('user_password')}
                                />
                            </div>
                            {errors.user_password && (
                                <p className="error-message">{errors.user_password.message}</p>
                            )}
                            <div className="mt-0">
                                <div className="flex justify-end items-center gap-x-2 text-sm text-center text-orange">
                                    <p className="text-sm text-orange cursor-pointer underline">
                                        <a href="/login" rel="noreferrer">
                                            Já é cadastrado?
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-orange w-full uppercase"
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
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


export default SignUp
