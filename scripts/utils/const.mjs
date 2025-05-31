import { join } from "node:path"

export const imageTempPath = join(process.cwd(), "temp");
export const defaultImageFileName = "image.png"
export const imageResizeWidth = [
    {
        alias: "1x",
        width: 300,
    },
    {
        alias: "2x",
        width: 600,
    },
    {
        alias: "3x",
        width: 1200
    }
];