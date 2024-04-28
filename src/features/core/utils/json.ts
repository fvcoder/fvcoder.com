export function JsonParse<T>(json: string): T {
  try {
    return JSON.parse(json) as T;
  } catch (error) {
    return {} as T;
  }
}
