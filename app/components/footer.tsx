import { Footer } from "flowbite-react";

export function FooterDefault(): JSX.Element {
  return (
    <Footer>
      <Footer.Copyright
        href="/"
        by="thefersh.com"
        year={2022}
      />
    </Footer>
  )
}
