import { ulid } from 'ulid';

export function generateUid(prefix?: string): string {
  const id = ulid();

  return `${prefix ? `${prefix}_` : ''}${id}`;
}
