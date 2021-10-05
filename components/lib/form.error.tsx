import { ErrorIcon } from '@fluentui/react-icons-northstar'
import React from 'react'
import { FieldError } from 'react-hook-form'

export function FormError(e: { err: FieldError }): JSX.Element {
  const errorText = {
    required: 'El campo es requerido',
    minLength: `No se alcanzo el minimo de caracteres`
  }
  return (
    <small className="form-error" role="alert">
      <ErrorIcon className="icon-error inline-block mr-2" />
      <span>{errorText[e.err.type] || 'Ocurrio un error'}</span>
    </small>
  )
}
