import { Card, CardBody } from "@heroui/react";
import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div className="w-dvw h-dvh bg-indigo-100 flex items-center justify-center">
      <Card className="w-full h-full rounded-none shadow-none sm:max-w-md sm:h-auto sm:max-h-full sm:rounded-large sm:shadow-medium">
        <CardBody>
          <header>
            <img
              src="https://cdn.fvcoder.com/icon/2024-12/favicon-96x96.png"
              alt="fvcoder logo"
              width={40}
              height={40}
              className="rounded-full mx-auto"
            />
            <p className="text-2xl font-semibold text-center">fvcoder</p>
          </header>
          <main>
            <Outlet />
          </main>
          <footer className="text-center">
            <a
              href="/terms"
              className="text-default-700 text-xs hover:underline"
            >
              Términos y condiciones
            </a>
          </footer>
        </CardBody>
      </Card>
    </div>
  );
}
