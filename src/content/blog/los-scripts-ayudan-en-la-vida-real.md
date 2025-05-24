---
title: '¿Los scripts ayudan en la vida real?'
description: 'Como desarrollador de software, me tope con distintos escenarios y atravesé dificultades lo que me llevo a crear scripts.'
pubDate: '2025-05-24T11:18:06.220Z'
heroImage: 'https://cdn.fvcoder.com/blog/los-scripts-ayudan-en-la-vida-real.webp'
tags: []
---
Como desarrollador de software, me tope con distintos 
escenarios y atravesé dificultades lo que me llevo a 
crear scripts. Pero vamos a iniciar desde cero...

## ¿Que es un script?
Es una pieza de código que se ejecuta bajo ciertas 
condiciones o reaccionando a determinados eventos.

Podemos verlo como un atajo para realizar distintas
acciones de manera automática.

En la programación esto me ayudo en distintos aspectos
para esto te dare distintos ejemplos, uno mas complicado
e interesante que otro:

### Caso 1: Script para crear generar artículos
Antes de nada, aclarar que estos artículos son creados
por una persona real, tu servidor: Fernando Ticona, 
no es una IA.

Probe distintos servicios para realizar este blog, lo 
que quería es tener un blog funcional, que pueda extender
su funcionalidad y que sea gratis o a un costo bajo.

Para eso programe un sitio donde cada articulo sea un
archivo independiente con un titulo, description, fecha 
de creación, imagen de portada y su contenido.

Crear un nuevo articulo es algo fastidioso, tengo 
que seguir muchos pasos.

1. Copear un articulo anterior con el formato
2. Borrar el contenido innecesario
3. Cambiar el titulo, description, e imagen
4. Poner una nueva fecha de publicación (en formato ISO)
5. Cambiar el nombre del archivo para que sea URL Friendly
6. Ahora si, puedo escribir

Son muchos pasos para poder escribir un articulo,
asi que cree un script que solo me pregunta 2 cosas.

1. Titulo del articulo
2. Nombre del archivo

Como un extra, el nombre del archivo se define en base al 
titulo, asi que no tengo que hacer ningún cambio, y en el 
caso que exista otro archivo, me avisa y lo puedo cambiar 
el nombre del archivo.

```js
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
```

### Caso 2: Automatizaciones de inicio
Principalmente lo veo a la hora de crear dashboard
donde no existe ningún usuario registrado, creo un
script que verifica que la base de datos no tenga
ningún usuario registrado, ademas que da la advertencia
de que ese usuario necesita cambiar la contraseña y
el nombre de usuario, dependiendo el caso.

Pero también lo veo cada vez que enciendo la computadora
automáticamente abren programas que uso como WhatsApp
y Spotify o cambiando automáticamente de tema oscuro a
claro dependiendo de la hora.

### Caso 3: Despliegues a producción
Al desarrollar, normalmente estoy solo y no me puedo
dar el lujo de contratar a una persona o desplegar
un proyecto manualmente o hacer test.

Asi que lo automatice con scripts, los tests los realizo
antes de subir un cambio. Esto verifica que no se rompa nada
y verifica que todo funciona bien.

Se tarda bastante al escribir los test, pero vale la pena
por que luego me ahorro un montón de tiempo y es un control
de calidad fuerte.

Luego esta el despliegue a producción automático, que 
sucede apenas subo un cambio en cualquier proyecto. Solo
tengo que esperar unos cuantos minutos y ya se que ese cambio
esta en producción y en el caso de que falle por cualquier 
razón, se genera un reporte automáticamente.

## Conclusion
Los scripts son útiles, ahorran tiempo y molestias al 
realizar diferentes actividades.

Implementarlos es un reto, por que tienes que ver los
requerimientos y como lo implementaras. Pero vale la 
pena.

Como digo:
> A mi me pagan por ahorrarle tiempo a la gente.

