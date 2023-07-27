import classNames from "classnames"

const buttonBase = "select-none flex items-center justify-center border rounded font-inter outline-none focus:ring-2 focus:ring-blue-300 transition"

const buttonSizeNormal = "py-1 px-3.5 font-[500] leading-6"
const buttonSizeSmall = "py-0.5 px-3 font-[500] leading-6 text-sm"

const buttonColorDefault = "border-[#00000026] bg-slate-50 text-neutral-900 hover:bg-neutral-200"
const buttonColorLink = "border-transparent bg-transparent text-neutral-900 hover:bg-neutral-200"

export const buttonDefault = classNames(buttonBase, buttonSizeNormal, buttonColorDefault)
export const buttonLink = classNames(buttonBase, buttonSizeSmall, buttonColorLink)