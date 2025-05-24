import fs from "node:fs/promises"
import path, { resolve } from "node:path"
import inquirer from 'inquirer';
import { existsSync } from "node:fs"

function toUrlFriendly(str) {
  return str
    .normalize("NFD")                     // Separar acentos de letras
    .replace(/[\u0300-\u036f]/g, "")      // Eliminar los acentos
    .replace(/[^a-zA-Z0-9\s-]/g, "")      // Eliminar caracteres especiales
    .replace(/\s+/g, "-")                 // Reemplazar espacios por guiones
    .replace(/-+/g, "-")                  // Reemplazar múltiples guiones por uno
    .toLowerCase();                       // Convertir a minúsculas
}

const dirPath = path.join(process.cwd(), "src/content/blog")

async function main() {
    const res = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Titulo del articulo",
        },
        {
            type: "input",
            name: "slug",
            message: "slug",
            default: (state) => {
                if (!state.name) {
                    return "";
                }

                const name = String(state.name)

                return toUrlFriendly(name)
            },
            validate: (value) => {
                if (existsSync(path.join(dirPath, `${value}.md`))) {
                    return "ya existe un archivo similar"
                }

                return true;
            }
        }
    ])

    fs.writeFile(path.join(dirPath, `${res.slug}.md`), `---
title: '${res.name}'
description: ''
pubDate: '${new Date().toISOString()}'
heroImage: 'https://images.prismic.io/fvcoder/bb5b6502-6f09-468f-8872-6e2ec5a4a3f6_blog+portadas+%282%29.png?auto=compress,format'
tags: []
---
Inicia aquí`)

}

main() 