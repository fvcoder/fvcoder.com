import { Card } from 'flowbite-react'

export function MainCard(): JSX.Element {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="text-sm text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  )
}
