const { existsSync } = require("fs")
const { readdir, writeFile } = require("fs/promises")
const { lstatSync } = require("fs")
const p = require("@prismicio/client")
const path = require("path")
const md = require("@edwinjoseph/prismic-richtext-markdown")

const client = p.createClient("thefersh", {
    "accessToken": "MC5aR1ZUeFJFQUFDSUE5Y0x6.77-9Ekzvv71-fO-_ve-_vTpV77-977-977-9L0nvv70Y77-977-9cu-_vX_vv73vv71WcVct77-977-977-9PQ"
})
const client2 = p.createClient("fvcoder", {
    "accessToken": "MC5aTmdtUGhBQUFDY0FweDQ5.Ljc_Oe-_ve-_ve-_vSTvv70FEe-_ve-_ve-_ve-_vU97Z--_ve-_ve-_vVDvv73vv73vv71VSu-_ve-_vToZ77-9"
})

/** Global Config */
const pathContent = path.join(__dirname, "../src/content/blog")
const rewrite = true;

// UTILS
async function getAllBlogs(client, page = 1) {
    const articles = []
    const blog = await client.getByType("blog", {
        pageSize: 10,
    })
    blog.results.forEach((x) => {
        articles.push(x)
    })

    if (blog.total_pages > page) {
        return [...articles, ...(await getAllBlogs(client, page + 1))]
    }

    return articles;
}

async function main() {
    try {
        const articleList = (await readdir(pathContent)).filter(x => lstatSync(path.join(pathContent, x)).isFile()).map(x => x.replace(/\.(md|mdx)$/, ""))

        const blogs = [
            ...(await getAllBlogs(client)),
            ...(await getAllBlogs(client2)),
        ]

        const d = blogs.map(async (a, i) => {
            const slug = a.slugs[0] ? a.slugs[0] : a.uid;
            const p = path.join(pathContent, `${articleList.includes(slug) ? `${slug}-${a.id}` : slug}.md`);
/*
            await writeFile(p,
                `---
title: '${md(a.data.title).replace("# ", "")}'
description: '${md(a.data.description)}'
pubDate: '${a.last_publication_date}'
heroImage: '${a.data.image.url}'
tags: [${a.tags.map(x => `'${x}'`).join(", ")}]
---
${md(a.data.title)}
    
${md(a.data.description)}
${md(a.data.body)}            `, {
                "encoding": "utf-8",
            }

            )
            */
            return p
        })

        console.log(articleList.length, blogs.length)
        await writeFile(path.join(__dirname, "data.json"), JSON.stringify(blogs, null, 2), "utf-8")
    } catch (e) {
        console.log(e)
    }



}

main();
