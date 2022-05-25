export default function BlogArticlePage(): JSX.Element {
  return (
    <>
      <header className="w-full h-96">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/1000/500"
          alt=""
        />
      </header>
      <article className="prose dark:prose-invert py-6 mx-auto px-4 md:px-0">
        <h1>adas</h1>
        <small>12, mayo 1212</small>
      </article>
    </>
  )
}
