const monthNames = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

export function dateFormat(date: string): string {
  const d = new Date(date)
  return `${d.getDate()} de ${monthNames[d.getMonth()]}, ${d.getFullYear()}`
}
