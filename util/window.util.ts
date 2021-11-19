export function IsBrowser() {
  return typeof window !== 'undefined'
}

export function IsServer() {
  return typeof window === 'undefined'
}
