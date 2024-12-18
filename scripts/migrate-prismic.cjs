const { readdir } = require("fs/promises")
const { lstatSync } = require("fs")
const p = require("@prismicio/client")
const path = require("path")

const client = p.createClient("fvcoder", {
    "accessToken": "MC5aTmdtUGhBQUFDY0FweDQ5.Ljc_Oe-_ve-_ve-_vSTvv70FEe-_ve-_ve-_ve-_vU97Z--_ve-_ve-_vVDvv73vv73vv71VSu-_ve-_vToZ77-9"
})

/** Global Config */
const pathContent = path.join(__dirname, "../src/content/blog")
const rewrite = true;

// UTILS
async function getAllBlogs(page = 1) {
    const articles = []
    const blog = await client.getByType("blog", {
        pageSize: 10,
    })

    console.log(blog.total_pages, page, blog.results_per_page)

    blog.results.forEach((x) => {
        articles.push(x.data)
    })

    if (blog.total_pages > page) {
        return [...articles, ...(await getAllBlogs(page + 1))]
    }
    
    return articles;
}

async function main() {
    const articleList = (await readdir(pathContent)).filter(x => lstatSync(path.join(pathContent, x)).isFile()).map(x =>x.replace(/\.(md|mdx)$/, ""))

    const blog = await getAllBlogs()
    // https://www.npmjs.com/package/@edwinjoseph/prismic-richtext-markdown
}

main();
