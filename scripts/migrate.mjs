import { join, basename } from "node:path";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import parse from "parse-md"
import { imageTempPath } from "./utils/const.mjs"
import { existsSync } from "node:fs";
import { downloadFile } from "./utils/downloadFile.mjs"
import { toWebp } from "./utils/toWebp.mjs";
import { randomUUID } from "node:crypto";

const workDir = join(process.cwd(), "src/content/blog");

async function migrateImages() {
    const filesDir = (await readdir(workDir)).filter(x => x.endsWith("md")).map(x => join(workDir, x))
    const tempDir = join(imageTempPath, "migrate");

    if (!existsSync(tempDir)) {
        await mkdir(tempDir, { recursive: true })
    }

    await Promise.all(filesDir.map(async (file) => {
        const content = String(await readFile(file, "utf-8"));
        const { metadata: { heroImage } } = parse(content);
        
        const fileDisk = await downloadFile(heroImage, join(tempDir, randomUUID()));
        const images = await toWebp(tempDir, basename(fileDisk));
        
        const imageUrl = `https://cdn.fvcoder.com/blog/${basename(images.find((x) => x.alias === "3x").fileDir)}`;
        const newContent = content.replace(heroImage, imageUrl);

        await writeFile(file, newContent, "utf-8");
    }))
}
    
migrateImages();