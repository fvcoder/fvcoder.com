import { join } from "node:path"
import { imageTempPath, defaultImageFileName, imageResizeWidth } from "./const.mjs"
import { existsSync } from "node:fs"
import { mkdir } from "node:fs/promises" 
import sharp from "sharp"
import { randomUUID } from "node:crypto"

export async function toWebp(pathDir = imageTempPath, fileName = defaultImageFileName) {
    const imagePath = join(pathDir, fileName);
    const uploadPath = join(imageTempPath, "uploads")

    if (!existsSync(imagePath)) {
        throw new Error("image not found")
    }

    if (!existsSync(uploadPath)) {
        await mkdir(uploadPath, { recursive: true })
    }

    const image = sharp(imagePath);

    const imageId = randomUUID().replaceAll("-", "");
    const transform = await Promise.all(imageResizeWidth.map(async ({ alias, width }) => {
        const fileDir = join(uploadPath, `${imageId}.${alias}.webp`)
        await image
            .resize({
                width,
                withoutEnlargement: true,
            })
            .toFormat("webp")
            .toFile(fileDir)

        return {
            alias,
            width,
            fileDir,
        }
    }))
    
    return transform;        
}