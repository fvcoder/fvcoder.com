export function HeaderCard(): JSX.Element {
  return (
    <div className="aspect-w-5 aspect-h-4 h-full w-auto">
      <img
        src="https://picsum.photos/1000/500"
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="bg-black/30 md:bg-transparent md:hover:bg-black/20 transition-colors flex flex-col justify-end p-4">
        <h1 className="text-xl text-white truncate">title sdsedd dse d dsd </h1>
        <p className="text-sm text-gray-300 truncate">12, mayo de 2022</p>
      </div>
    </div>
  )
}
