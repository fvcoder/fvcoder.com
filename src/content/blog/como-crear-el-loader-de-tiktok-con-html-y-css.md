---
title: 'Como crear el loader de TikTok con html y Css'
description: 'Todos en algun momento vimos el loader de TikTok y probablemente nos quedamos horas viendo esta red social, en este post te enseño a crearlo solo con Html y Css'
pubDate: '2024-08-01T13:22:27+0000'
heroImage: 'https://images.prismic.io/fvcoder/Zqt-lh5LeNNTxuCc_fvcoder-3-.png?auto=format,compress'
tags: ['tutorial']
---
# Como crear el loader de TikTok con html y Css

Todos en algun momento vimos el loader de TikTok y probablemente nos quedamos horas viendo esta red social, en este post te enseño a crearlo solo con Html y Css
Para crear un loader necesitamos un editor de codigo, te recomiento [Visual Studio Code](https://code.visualstudio.com/) con la extencion de [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Pero si no lo tenemos a mano te recomiendo [Codi.link](https://codi.link/).

Una vez preparados empecemos con el código:

## Estructura

Para una buena estructura, lo realizaremos encima de una etiqueta de div con dos hijos span, en forma de componente, para su reutilización, en caso de que sea necesario.

```
languaje:xml
<div class="loader">
  <span class="magenta"></span>
  <span class="cyan"></span>
</div>
```

## Estilo

Para el el estilo manejaremos Css, por si necesitas el código con urgencia o para saltarte el tutorial, aquí lo tienes:

```
languaje:css
.loader {
  display: flex;
  gap: 0.75rem;
}
.loader > span {
  width: 100px;
  height: 100px;
  display: block;
  border-radius: 50%;
  mix-blend-mode: multiply;
}
.magenta {
  background-color: #ff0755;
  animation: move-right 1s linear infinite;
}
.cyan {
  background-color: #00f2ea;
  animation: move-left 1s linear infinite;
}

@keyframes move-right {
  0%, 10% {
    transform: scale(1) translateX(0);
  }
  30% {
    transform: scale(1.2) translateX(3.4375rem);
  }
  50%, 60% {
    transform: scale(1) translateX(6.875rem);
  }
  80% {
    transform: scale(0.8) translateX(3.4375rem);
  }
}

@keyframes move-left {
  0%, 10% {
    transform: scale(1) translateX(0);
  }
  30% {
    transform: scale(1.2) translateX(-3.4375rem);
  }
  50%, 60% {
    transform: scale(1) translateX(-6.875rem);
  }
  80% {
    transform: scale(0.8) translateX(-3.4375rem);
  }
}
```

Ahora si, aquí esta la explicación:

En .loader > span usaremos > para dar una herencia de propiedades directa, y general a todos los hijos de .loader

Como propiedades tenemos la altura y anchura, en esta ocasión lo realice en un gran tamaño para que se pueda apreciar todos los detalles.

mix-blend-mode es una propiedad importante, ya que indica a nuestro navegador como se debe fusionar el contenido en capas, en este caso con el valor multiply podemos combinar los colores.

Luego tenemos las animaciones, hechas para cada uno como espejo del otro.

Espero que este tutorial te ayude y espero que aprendas mas acerca de css.

&nbsp;

Fernado Ticona (@fvcoder)

PD: Puedes encontrar el articulo original [aqui](https://www.fvcoder.com/roadmap/32517adc-5343-4115-b3b5-cce732e838b2).
