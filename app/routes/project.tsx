import { Outlet } from "@remix-run/react";
import { Footer } from "~/feactures/footer";
import { Navbar } from "~/feactures/navbar";

export default function ProjectLayout(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
