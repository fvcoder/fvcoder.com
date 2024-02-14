import './platzi.css';

export function PrePromoPlatzi() {
  return (
    <div className="rounded-md bg-[#13161c] flex flex-col md:flex-row items-center gap-4 py-4 select-none">
      <div className="w-2/4 aspect-square card-image"></div>
      <div className="p-4 md:p-0 text-center">
        <h2 className="mt-0">
          <span className="text-[#0ae98a] font-light block">
            Para todos tus retos,
          </span>
          <span className="text-[#eff3f8] font-bold">Prepárate en Platzi</span>
        </h2>
        <div className="not-prose">
          <a
            href="https://platzi.com/r/fvcoder"
            target="_blank"
            className="card-btn"
          >
            Inscribete Ahora
          </a>
        </div>
      </div>
    </div>
  );
}
