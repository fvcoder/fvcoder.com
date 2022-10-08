export interface TitleSectionProps {
  title: string
  subTitle: string
}

export function TitleSection({ title, subTitle }: TitleSectionProps): JSX.Element {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">{title}</h2>
      <p className="text-base mt-4 text-gray-500">{subTitle}</p>
    </div>
  )
}
