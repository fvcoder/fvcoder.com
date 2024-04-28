export const fileKey = 'file';

export async function fileMutation(file: File): Promise<string | undefined> {
  const formData = new FormData();
  formData.append('file', file);

  return fetch('/api/file', {
    method: 'POST',
    body: formData,
  })
    .then(async (res) => {
      if (String(res.status).startsWith('2')) {
        const data = await res.json();

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return data.file.url as string;
      }

      return undefined;
    })
    .catch((e) => Promise.reject(e));
}
