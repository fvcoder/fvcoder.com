import { Alert, Button, Input } from "@heroui/react";
import { Turnstile } from "@marsidev/react-turnstile";
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { useState } from "react";

import { getAuth, getAuthProps } from "~/features/auth/lib/auth";

export const meta: MetaFunction = () => [
  {
    title: "Inicia sesión en fvcoder.com",
  },
];

export const loader: LoaderFunction = (c) => {
  const url = new URL(c.request.url);
  const next = url.searchParams.get("next") ?? "/";

  return {
    next: next.startsWith("/") ? next : "/",
    env: {
      TURNSTILE_SITE_ID: c.context.cloudflare.env.TURNSTILE_SITE_ID as string,
    },
  };
};

export const action: ActionFunction = async (c) => {
  const data = await c.request.formData();
  if (data.has("email") && data.has("cf-turnstile-response")) {
    const email = data.get("email") as string;
    const auth = getAuth(c.context.cloudflare.env as getAuthProps);
    await auth.api.signInMagicLink({
      headers: c.request.headers,
      body: {
        email,
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        callbackURL: (data.get("next") as string) ?? "/",
      },
    });

    return {
      provider: "magic-link",
      status: true,
    };
  }

  return {};
};

export default function SignInPage() {
  const loader = useLoaderData<{
    next: string;
    env: { TURNSTILE_SITE_ID: string };
  }>();
  const actionData = useActionData<{ provider: string; status: boolean }>();
  const navigation = useNavigation();
  const [enable, setEnable] = useState(false);

  return (
    <>
      <header>
        <h1 className="text-xl text-center">Iniciar sesión</h1>
      </header>
      <main className="my-4">
        {actionData && (
          <div className="mb-2">
            {actionData.provider === "magic-link" && (
              <Alert color="success">
                Se ha enviado un link de inicio de sesión a tu correo.
              </Alert>
            )}
          </div>
        )}
        <Form method="post">
          <div>
            <input
              type="text"
              className="hidden"
              name="next"
              defaultValue={loader.next}
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              label="Correo electrónico"
              autoFocus
            />
          </div>
          <div className="mt-2">
            {loader.env.TURNSTILE_SITE_ID && (
              <Turnstile
                siteKey={loader.env.TURNSTILE_SITE_ID}
                onError={() => setEnable(false)}
                onExpire={() => setEnable(false)}
                onSuccess={() => setEnable(true)}
                options={{
                  language: "es",
                  responseField: true,
                  size: "flexible",
                  appearance: "always",
                }}
              />
            )}
          </div>
          <div className="mt-2">
            <Button
              color="primary"
              type="submit"
              fullWidth
              isDisabled={!enable}
              isLoading={navigation.state === "submitting"}
            >
              Iniciar sesión con correo electrónico
            </Button>
          </div>
        </Form>
      </main>
    </>
  );
}
