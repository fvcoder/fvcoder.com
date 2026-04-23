# Fernando Ticona | fvcoder.com
Portafolio personal y blog de **Fernando Ticona** (@fvcoder), desarrollador frontend especializado en crear soluciones que ahorran tiempo y dinero.

🌐 **Sitio web**: [fvcoder.com](https://fvcoder.com)

## 🚀 Tecnologías

- **Framework**: [Astro 6.1](https://astro.build/) - Generador de sitios estáticos ultrarrápido
- **UI**: React 19 + [HeroUI v3](https://heroui.com/) + Tailwind CSS 4
- **Lenguaje**: TypeScript
- **Despliegue**: Cloudflare Workers (Wrangler)
- **Contenido**: Markdown, MDX con Astro Content Collections
- **Animaciones**: Framer Motion
- **Otros**: React GitHub Calendar, @vercel/og (Open Graph images)

## ✨ Características

- ✅ **100/100 Lighthouse** - Rendimiento óptimo
- ✅ **SEO optimizado** - Sitemap, RSS Feed, OpenGraph, canonical URLs
- ✅ **Diseño responsive** y moderno con Tailwind CSS
- ✅ **Blog técnico** - 30+ artículos sobre programación y desarrollo
- ✅ **Gráfico de contribuciones** estilo GitHub
- ✅ **Imágenes optimizadas** - WebP automático
- ✅ **Componentes interactivos** con React islands
- ✅ **Modo oscuro/claro** integrado

## 📁 Estructura del Proyecto

```text
├── public/               # Archivos estáticos (imágenes, fuentes, robots.txt)
├── src/
│   ├── assets/          # Recursos (fuentes)
│   ├── components/      # Componentes Astro y React
│   │   ├── react/      # Componentes interactivos (contributionGraph, headerNavbar)
│   │   └── ...        # Componentes Astro (Header, Footer, BlogPost, etc.)
│   ├── content/        # Colecciones de contenido (Blog y Proyectos)
│   │   ├── blog/      # 30+ artículos técnicos
│   │   └── project/   # Proyectos destacados
│   ├── layouts/        # Layouts reutilizables (Main, BlogPost)
│   ├── pages/          # Rutas del sitio (index, blog, proyectos, og)
│   ├── styles/         # Estilos globales (CSS + Tailwind)
│   └── data/           # Datos estructurados (experiencia)
├── scripts/             # Scripts de utilidad (crear blog, migrar, subir imágenes)
├── astro.config.mjs     # Configuración de Astro
├── wrangler.jsonc       # Configuración de Cloudflare Workers
├── package.json         # Dependencias del proyecto
└── tsconfig.json        # Configuración de TypeScript
```

## 📝 Sobre el Blog

El blog cubre temas como:

- **Fundamentos**: Algoritmos, pensamiento lógico, ASCII/Unicode
- **Desarrollo Frontend**: JavaScript, React, Next.js, APIs
- **Aprendizaje**: Cómo aprender a programar, gestión del tiempo
- **Carrera**: Consejos freelance, herramientas, reflexiones
- **Proyectos**: Documentación de evolución del portafolio

## 🎯 Enfoque

> *"Creo soluciones que ahorran tiempo y dinero. Construyo experiencias digitales, automatizaciones y herramientas que simplifican procesos reales."*

**Especialidades**: Escalamiento, Automatización, Procesos y Ejecución

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando             | Acción                                                      |
| :------------------ | :---------------------------------------------------------- |
| `pnpm install`      | Instala las dependencias                                     |
| `pnpm dev`          | Inicia el servidor de desarrollo en `localhost:4321`         |
| `pnpm build`        | Construye el sitio para producción en `./dist/`             |
| `pnpm preview`      | Previsualiza el build localmente antes de desplegar         |
| `pnpm newBlog`      | Crea un nuevo post de blog usando un script interactivo     |
| `pnpm astro ...`    | Ejecuta comandos CLI de Astro (`astro add`, `astro check`)  |

## 🚀 Despliegue

El sitio está configurado para desplegarse en **Cloudflare Workers** usando Wrangler:

```bash
pnpm wrangler deploy
```

## 📬 Contacto

- **GitHub**: [@fvcoder](https://github.com/fvcoder)
- **LinkedIn**: [fvcoder](https://linkedin.com/in/fvcoder)
- **TikTok**: [@fvcoder](https://tiktok.com/@fvcoder)
- **Figma**: [@fvcoder](https://figma.com/@fvcoder)

---

© 2024-2026 Fernando Ticona. Hecho con ❤️ usando Astro + React + Tailwind CSS
