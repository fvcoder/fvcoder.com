import { CloudDownloadIcon } from "@heroicons/react/outline";
import { Link } from "remix";

export function Navbar(): JSX.Element {
  return (
    <nav>
      <div className="container mx-auto px-4 md:px-0 flex justify-between items-center py-7">
        <Link to="/" className="text-lg font-bold">
          Fernando Ticona
        </Link>
        <a
          href="/fernando-ticona-cv.pdf"
          className="flex items-center gap-2 text-dark border border-red rounded-lg p-2.5"
          download={true}
        >
          <span className="hidden md:block">Descargar Cv</span>
          <CloudDownloadIcon className="w-5 h-auto" />
        </a>
      </div>
    </nav>
  );
}
