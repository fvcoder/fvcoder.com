import { Navbar } from "../navbar";

export function HomePage() {
    return (
        <div>
            <Navbar />
            <button className="flex items-center justify-center py-1 px-3.5 bg-slate-50 border border-[#00000026] rounded text-neutral-900 font-inter font-[500] leading-6 hover:bg-neutral-200 outline-none focus:ring-2 focus:ring-blue-300 transition">
                Button
            </button>
        </div>
    )
}