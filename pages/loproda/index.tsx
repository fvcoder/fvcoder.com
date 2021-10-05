import React, { useState } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { NavbarPublic } from '../../components/navbar'
import NextUrl from 'next-absolute-url'
import { Dialogs } from '../../components/lib/dialog'
import { useForm } from 'react-hook-form'
import { submitContact } from '../../services/contact'
import { FormError } from '../../components/lib/form.error'

interface Metatags {
  title: string
  description: string
  urlOrigin: string
  type?: string
  img?: string
}

interface ContactMeI {
  name: string
  scholl: string
  load: string
  whatsapp: number
  query: string
}

function ContactMe() {
  const [isOpen, setIsOpen] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm<ContactMeI>({ criteriaMode: 'all' })

  return (
    <>
      <button className="btn btn--primary" onClick={() => setIsOpen(true)}>
        Contactanos
      </button>
      <Dialogs
        state={isOpen}
        setState={setIsOpen}
        title="Completa el formulario"
      >
        <form onSubmit={handleSubmit(submitContact)}>
          <div className="mt-2">
            <div className="form-control">
              <label className="form-label block">Nombre</label>
              <input
                type="text"
                className="form-input block w-full"
                placeholder="Jhon Doe"
                {...register('name', { required: true, minLength: 3 })}
              />
              {errors.name ? <FormError err={errors.name} /> : null}
            </div>
            <div className="form-control">
              <label className="form-label block">Nombre del colegio</label>
              <input
                type="text"
                className="form-input block w-full"
                placeholder="Colegio Valores Humanos"
                {...register('scholl', { required: true, minLength: 3 })}
              />
              {errors.scholl ? <FormError err={errors.scholl} /> : null}
            </div>
            <div className="form-control">
              <label className="form-label block">Cargo</label>
              <input
                type="text"
                className="form-input block w-full"
                placeholder="Director"
                {...register('load', { required: true, minLength: 3 })}
              />
              {errors.load ? <FormError err={errors.load} /> : null}
            </div>
            <div className="form-control">
              <label className="form-label block">
                Whatsapp{' '}
                <span className="text-gray-500">
                  (Incluya el codigo del pais)
                </span>
              </label>
              <input
                type="tel"
                className="form-input block w-full"
                placeholder="+591 77777777"
                {...register('whatsapp', { required: true, minLength: 3 })}
              />
              {errors.whatsapp ? <FormError err={errors.whatsapp} /> : null}
            </div>
            <div className="form-control">
              <label className="form-label block">
                Preguntas o Comentarios
              </label>
              <textarea
                className="form-input block w-full"
                placeholder="Consulta ..."
                {...register('query', { required: true, minLength: 3 })}
              ></textarea>
              {errors.query ? <FormError err={errors.query} /> : null}
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              type="button"
              className="btn"
              onClick={() => {
                reset()
                setIsOpen(false)
              }}
            >
              Cancelar
            </button>
            <input type="submit" className="btn btn--primary" value="Enviar" />
          </div>
        </form>
      </Dialogs>
    </>
  )
}

const IndexLoproda: NextPage<Metatags> = ({
  title,
  description,
  urlOrigin,
  img,
  type
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content={type || 'website'} />
        <meta property="og:url" content={urlOrigin} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {img ? <meta property="og:image" content={img} /> : null}

        <meta
          property="twitter:card"
          content={img ? 'summary_large_image' : 'summary'}
        />
        <meta property="twitter:url" content={urlOrigin} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {img ? <meta property="twitter:image" content={img} /> : null}
      </Head>
      <NavbarPublic app="Loproda" />
      <header className="mx-auto container h-auto md:h-80 bg-win-200 text-center py-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl">Loproda</h1>
        <p>{description}</p>
        <div className="mt-3">
          <ContactMe />
        </div>
      </header>
      <main className="container mx-auto py-4 text-center">
        <p>Estamos contruyendo la idea</p>
      </main>
    </>
  )
}

IndexLoproda.getInitialProps = ({ req }) => {
  const { origin } = NextUrl(req)
  return {
    title: 'Loproda - Optimización para escuelas',
    description:
      'Ayudamos a escuelas para que pueda gestionar el aprendizaje de sus alumnos',
    urlOrigin: origin + '/loproda'
  }
}

export default IndexLoproda
