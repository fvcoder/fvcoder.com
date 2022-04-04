import { client } from "../config";

const urlBase = "https://www.thefersh.com/";

export async function sitemapBlog() {
  const data = await client.getByType("blog", {
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
  });
  return data.results.map((x) => {
    return {
      url: {
        loc: `${urlBase}blog/${x.uid}`,
        lastmod: x.last_publication_date,
      },
    };
  });
}

export async function sitemapProjects() {
  const data = await client.getByType("projects", {
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
  });
  return data.results.map((x) => {
    return {
      url: {
        loc: `${urlBase}project/${x.uid}`,
        lastmod: x.last_publication_date,
      },
    };
  });
}

export async function sitemap() {
  const blogData = await sitemapBlog();
  const projectsData = await sitemapProjects();
  return {
    _name: "urlset",
    _attrs: {
      xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
    },
    _content: [
      ...blogData,
      ...projectsData,
      {
        url: {
          loc: urlBase,
          lastmod: new Date().toDateString(),
        },
      },
      {
        url: {
          loc: `${urlBase}blog`,
          lastmod: new Date().toDateString(),
        },
      },
      {
        url: {
          loc: `${urlBase}project`,
        },
      },
    ],
  };
}
