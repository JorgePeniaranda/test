export interface Persona {
  nombre: string
  apellido: string
  edad: number
}

export const EMPTY_PERSONA: Persona = {
  nombre: '',
  apellido: '',
  edad: 0
}

export function isCompletePersona(persona: Partial<Persona>): persona is Persona {
  return (
    typeof persona.nombre === 'string' &&
    typeof persona.apellido === 'string' &&
    typeof persona.edad === 'number'
  )
}

export function completePersona(persona: Partial<Persona>): Persona {
  return {
    nombre: persona.nombre ?? EMPTY_PERSONA.nombre,
    apellido: persona.apellido ?? EMPTY_PERSONA.apellido,
    edad: persona.edad ?? EMPTY_PERSONA.edad
  }
}
