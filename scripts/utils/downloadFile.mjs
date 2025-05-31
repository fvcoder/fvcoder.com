import axios from "axios";
import { createWriteStream } from "node:fs";

export async function downloadFile(url, destDir) {
    try {
        const res = await axios.get(url, { responseType: "stream" })
        const writer = createWriteStream(destDir);

        res.data.pipe(writer);

        return await new Promise((resolve, reject) => {
            writer.on("finish", () => {
                resolve(destDir)
            })
            writer.on("error", reject);
        })

    } catch (e) {
        return Promise.reject(e)
    }
}