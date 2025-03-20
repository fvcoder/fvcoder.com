import { Footer } from "./footer";
import { HeaderNavbar } from "./navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderNavbar />
      {children}

      <Footer />
    </>
  );
}
