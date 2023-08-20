import React, { useRef } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import emailjs from "@emailjs/browser"
import { phoneFormatMask } from "../../../services/formatters"

const schema = yup.object({
  user_firstName:
    yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Por favor, insira um nome válido.")
      .min(3, "Por favor, insira seu nome corretamente.")
      .max(30, "Por favor, insira seu nome corretamente.")
      .required("O campo nome é obrigatório."),
  user_lastName:
    yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Por favor, insira um sobrenome válido.")
      .min(3, "Por favor, insira seu sobrenome corretamente.")
      .max(30, "Por favor, insira seu sobrenome corretamente.")
      .required("O campo sobrenome é obrigatório."),
  user_email:
    yup
      .string()
      .email('Por favor, insira um e-mail válido.')
      .required("O campo e-mail é obrigatório."),
  user_phone:
    yup
      .string()
      .min(14,'Por favor, insira um número telefônico válido.')
      .max(15, "Por favor, insira um número telefônico válido.")
      .required("O campo número telefônico é obrigatório."),
  user_message:
    yup
      .string()
      .required("O campo mensagem é obrigatório."),
}).required()

const Contact = (ev) => {
  const formRef = useRef()
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  const apiKey = process.env.REACT_APP_EMAILJS_API_KEY

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async () => {
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, apiKey)

      toast.success('Mensagem enviada com sucesso, em breve entraremos em contato.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })

      reset()
    } catch (error) {
      toast.error('Houve um erro ao enviar sua mensagem, tente novamente.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  return (
    <section
      className="section-sm lg:pt-[150px]"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px] rounded-[22px] lg:rounded-none">
          <div className="flex-1 flex flex-col justify-center pl-8">
            <div className="mb-2 lg:mb-7">
              <h2 className="h2">
                Entre em contato conosco para iniciar sua jornada relaxante.
              </h2>
            </div>
            <div className="mb-7 lg:mb-0">
              <p>
                Entre em contato conosco agora e mesmo, organizaremos sua jornada a partir daqui de uma maneira 
                flexível para que você possa participar de todas as aulas, se sentir livre e mais leve com a vida.
              </p>
            </div>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 bg-white shadow-primary rounded-[20px] p-5 lg:p-14 flex flex-col gap-y-5 lg:-mt-20"
          >
            <div className="w-full">
              <input
                type="text"
                className="form-control"
                placeholder="Primeiro nome"
                {...register("user_firstName")}
              />
            </div>
            {errors.user_firstName && (
                <p className="error-message">{errors.user_firstName.message}</p>
            )}
            <div className="w-full">
              <input
                type="text"
                className="form-control"
                placeholder="Sobrenome"
                {...register("user_lastName")}
              />
            </div>
            {errors.user_lastName && (
                <p className="error-message">{errors.user_lastName.message}</p>
            )}
            <div className="w-full">
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
                {...register("user_email")}
              />
            </div>
            {errors.user_email && (
                <p className="error-message">{errors.user_email.message}</p>
            )}
            <div className="w-full">
              <input
                type="text"
                className="form-control"
                placeholder="Número telefônico"
                {...register("user_phone")}
                onKeyUp={(ev) => phoneFormatMask(ev)}
              />
            </div>
            {errors.user_phone && (
                <p className="error-message">{errors.user_phone.message}</p>
            )}
            <div className="w-full">
              <textarea
                className="form-control py-5 h-[165px] resize-none"
                placeholder="Deixe sua mensagem ou uma possível dúvida"
                {...register("user_message")}
              />
            </div>
            {errors.user_message && (
                <p className="error-message">{errors.user_message.message}</p>
            )}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="btn btn-lg btn-orange w-full uppercase"
              >
                Envie sua mensagem agora
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact
