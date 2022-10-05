export function HeroSection(): JSX.Element {
  return (
      <header className="bg-white dark:bg-gray-800 pb-12 md:pb-0">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4">
          <div className="text-center md:text-left md:w-2/5">
            <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">👋 Hello, I am Fernando Ticona</h1>
            <p className="text-base mt-4 text-gray-500">I'm a frontend programmer, focused on user interface and user experience. I'm also an enthusiastic learner, as I never stop learning.</p>
          </div>
          <div className="md:w-3/5">
            <div className="py-12">
              <img src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="object-cover aspect-square rounded-xl shadow mx-auto w-2/3 md:w-2/4" />
            </div>
          </div>
        </div>
      </header>
  )
}
