import path from "node:path"
import { toWebp } from "./utils/toWebp.mjs";

async function main() {
    const images = await toWebp()

    console.log(images.map(x => path.basename(x.fileDir)))
}

main();