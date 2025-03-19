import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface MagicLinkEmailProps {
  link: string;
  email: string;
  name?: string;
}

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

export const MagicLinkEmail = ({ name, email, link }: MagicLinkEmailProps) => (
  <Tailwind>
    <Html>
      <Head />
      <Body className="bg-white text-[#24292e] font-sans">
        <Preview>Inicia sesión con tu link mágico</Preview>
        <Container style={container}>
          <Img
            src={`https://github.com/fvcoder.png`}
            className="my-0 mx-auto rounded-full"
            width="40"
            height="40"
            alt="fvcoder logo"
          />

          <Text className="text-center" style={title}>
            Inicia sesión con tu link mágico
          </Text>

          <Section style={section}>
            <Row>
              <Column>
                <Text style={text}>
                  Hola <strong>{name}</strong>!,
                </Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text style={text}>
                  Haz click en el siguiente botón para ver iniciar sesión en
                  fvcoder.com
                </Text>
              </Column>
            </Row>

            <Row className="my-4">
              <Column>
                <Link
                  href={link}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm"
                >
                  Iniciar sesión con Link Mágico
                </Link>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text className="py-2" style={text}>
                  o copia y pega el siguiente enlace en tu navegador:
                </Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text className="text-center bg-slate-200 p-3 rounded-md my-0">
                  {link}
                </Text>
              </Column>
            </Row>
          </Section>

          <Text className="text-[#6a737d] text-xs text-center mt-4">
            Este correo fue enviado a <strong>{email}</strong> por fvcoder.com,
            si recibiste este correo por error, por favor ignóralo.
          </Text>
          <Text className="text-[#6a737d] text-xs text-center">
            fvcoder.com ・El Alto, La Paz, Bolivia · 0000
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

MagicLinkEmail.PreviewProps = {
  name: "Fernando Ticona",
  email: "fvcoder1@gmail.com",
  link: `https://fvcoder.com/api/auth-magic-link/aazztnqyksdlossvcloflftutdsogbkv`,
} satisfies MagicLinkEmailProps;

export default MagicLinkEmail;
