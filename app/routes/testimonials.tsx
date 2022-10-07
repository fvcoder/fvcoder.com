import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Pagination } from "~/components/pagination";
import { TestimonialSection } from "~/components/section/testimonial";
import { Footer } from "~/feactures/footer";
import { Navbar } from "~/feactures/navbar";
import type { getTestimonialListRes } from "~/prismic/testimonial.list";
import { getTestimonialList } from "~/prismic/testimonial.list";
import Image from 'public/ms-icon-310x310.png'

interface TestimonialsPageLoader {
  testimonials: getTestimonialListRes
  page: number
  url: string
}

export const meta: MetaFunction = ({ data: { url, page } }) => {
  const title = "Testimonials to Fernando Ticona | Page " + page
  const description = "Testimonials to Fernando Ticona @fvcoder"
  const image = new URL(url).origin + Image
  return {
    title,
    titleMeta: {
      name: "title",
      content: title,
    },
    description: description,
    robots: "index,follow,max-image-preview:large",
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

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const page = url.searchParams.has('page')
    ? Number.isNaN(Number(url.searchParams.get('page')))
      ? 1
      : Number(url.searchParams.get('page'))
    : 1
  const testimonials = (await getTestimonialList(page))
  return json<TestimonialsPageLoader>({ testimonials, page, url: request.url.split("?")[0] })
}

export default function TestimonialsPage(): JSX.Element {
  const { testimonials, page } = useLoaderData<TestimonialsPageLoader>()
  return (
    <>
      <Navbar />
      <TestimonialSection data={testimonials.data} noSeeAll />
      <Pagination page={page} pageSize={testimonials.pageSize} route="/testimonials" />
      <Footer />
    </>
  )
}
