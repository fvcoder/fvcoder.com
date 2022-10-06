import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import type { PrismicDocumentMeta } from "~/types/blog";
import type { getProjectListRes } from "~/prismic/project.list";
import type { getTestimonialListRes } from "~/prismic/testimonial.list";
import { Navbar } from "~/feactures/navbar";
import { BlogSection } from "~/components/section/blog";
import { HeroSection } from "~/components/section/hero";
import { ProjectSection } from "~/components/section/project";
import { TestimonialSection } from "~/components/section/testimonial";
import { Footer } from "~/feactures/footer";
import { json } from "@remix-run/node";
import { getBlogList } from "~/prismic/blog.list";
import { useLoaderData } from "@remix-run/react";
import { getProjectList } from "~/prismic/project.list";
import { getTestimonialList } from "~/prismic/testimonial.list";
import Image from 'public/ms-icon-310x310.png'

interface IndexLoader {
  blog: PrismicDocumentMeta[]
  project: getProjectListRes['data']
  testimonial: getTestimonialListRes['data']
  url: string
}

export const loader: LoaderFunction = async ({request}) => {
  const blog = (await getBlogList(1)).data
  const project = (await getProjectList(1)).data
  const testimonial = (await getTestimonialList()).data
  return json<IndexLoader>({ blog, project, testimonial, url: request.url })
}

export const meta: MetaFunction<LoaderFunction> = ({ data: { url } }) => {
  const title = "Fernando Ticona @fvcoder"
  const description = "I am a web programmer in Bolivia, looking for new projects in which I can participate."
  const image = new URL(url).origin + Image
  return {
    title,
    titleMeta: {
      name: "title",
      content: title,
    },
    description: description,
    robots: "index,follow,max-image-preview:large",
    canonical: url,
    "og:type": "website",
    "og:site_name": "Fernando Ticona",
    "og:url": url,
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "twitter:card": "summary_large_image",
    "twitter:site": "@fvcoder1",
    "twitter:url": url,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "theme-color": "#000000",
    "article:author": new URL(url).origin,
    "author": "Fernando Ticona"
  }
}

export default function Index() {
  const { blog, project, testimonial } = useLoaderData<IndexLoader>()
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectSection data={project} />
      <BlogSection data={blog} />
      <TestimonialSection data={testimonial} />
      <Footer />
    </>
  );
}
