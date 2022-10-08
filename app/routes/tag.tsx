import { Outlet } from "@remix-run/react";
import { Footer } from "~/feactures/footer";
import { Navbar } from "~/feactures/navbar";

export default function TagLayout(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
