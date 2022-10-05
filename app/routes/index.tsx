import { Navbar } from "~/feactures/navbar";
import { BlogSection } from "~/components/section/blog";
import { HeroSection } from "~/components/section/hero";
import { ProjectSection } from "~/components/section/project";
import { TestimonialSection } from "~/components/section/testimonial";
import { Footer } from "~/feactures/footer";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getBlogList } from "~/prismic/blog.list";
import type { PrismicDocumentMeta } from "~/types/blog";
import { useLoaderData } from "@remix-run/react";

interface IndexLoader {
  blog: PrismicDocumentMeta[]
}

export const loader: LoaderFunction = async () => {
  const blog = await (await getBlogList(1)).data
  return json<IndexLoader>({ blog })
}

export default function Index() {
  const { blog } = useLoaderData<IndexLoader>()
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <BlogSection data={blog} />
      <TestimonialSection />
      <Footer />
    </>
  );
}
