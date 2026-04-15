import { Button, Link, Label, Switch } from "@heroui/react";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react"  

export function HeaderNavbar() {
  const [isDarkMode, setDarkMode] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { title: "Blog", href: "/blog" },
    { title: "Portfolio", href: "/project" },
  ]

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

  }, [isDarkMode])
  
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link className="font-bold text-inherit" href="/?ref=navbar">
          Fernando Ticona
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <ul className="flex items-center gap-4">
            {menu.map((item) => (
              <li key={item.title}>
                <Link className="w-full" color="foreground" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <Switch isSelected={isDarkMode} onChange={setDarkMode} size="lg">
            <Switch.Control>
              <Switch.Thumb>
                <Switch.Icon>
                  <Icon
                    className="size-4 text-inherit"
                    icon={
                      isDarkMode
                        ? "fluent:weather-moon-16-filled"
                        : "fluent:weather-sunny-16-filled"
                    }
                  />
                </Switch.Icon>
              </Switch.Thumb>
            </Switch.Control>
            <Switch.Content>
              <Label className="sr-only">Cambiar tema</Label>
            </Switch.Content>
          </Switch>
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <Switch isSelected={isDarkMode} onChange={setDarkMode} size="sm" aria-label="Cambiar tema">
            <Switch.Control>
              <Switch.Thumb>
                <Switch.Icon>
                  <Icon
                    className="size-4 text-inherit"
                    icon={
                      isDarkMode
                        ? "fluent:weather-moon-16-filled"
                        : "fluent:weather-sunny-16-filled"
                    }
                  />
                </Switch.Icon>
              </Switch.Thumb>
            </Switch.Control>
          </Switch>

          <Button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="sm:hidden"
            isIconOnly
            variant="ghost"
            onPress={() => setIsMenuOpen((value) => !value)}
          >
            <Icon
              className="size-5"
              icon={isMenuOpen ? "lucide:x" : "lucide:menu"}
            />
          </Button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-separator px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-3">
            {menu.map((item) => (
              <li key={item.title}>
                <Link className="block w-full py-2" color="foreground" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
    );
  }