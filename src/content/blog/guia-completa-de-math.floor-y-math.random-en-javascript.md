---
title: 'Guía completa de Math.floor y Math.random en JavaScript'
description: 'Aprende cómo utilizar las funciones Math.floor y Math.random en JavaScript para redondear números y generar valores aleatorios. Descubre sus usos, ejemplos de código y cómo generar números aleatorios dentro de rangos específicos.'
pubDate: '2023-05-17T22:07:37+0000'
heroImage: 'https://images.prismic.io/thefersh/73e81671-2921-4538-8a03-c171b0e60ac0_Numeros+aleatorios.png?auto=compress,format'
tags: ['javascript', 'matematica', 'Math']
---
Aprende cómo utilizar las funciones Math.floor y Math.random en JavaScript para redondear números y generar valores aleatorios. Descubre sus usos, ejemplos de código y cómo generar números aleatorios dentro de rangos específicos.
Vamos por pasos, primero te explicare las herramientas que usaremos

## Math.floor

Es una funcion que nos permite redondear (literalmente) numeros.

**Nota:** Matematicamente hablando, no cumple con las reglas matematicas para el redondeo de cifras.

```js
Math.floor(1.1) // 1
Math.floor(1.5) // 1
Math.floor(1.9) // 1
```

## Math.random

Genera un numero aleatorio entre 0 y 1.

```js
Math.random() // 0.9368134213544823
Math.random() // 0.6821018882993535
Math.random() // 0.16563351397298587
```

## ¿Como genero un numero aleatorio entre a y b?

Para generar un numero aleatorio entre dos cantidades, primero debemos generar un numero aleatorio y multiplicarlo por la diferencia entre a y b mas 1.
Esto nos data una un numero decimal que posteriormente lo sumaremos al valor minimo para que este dentro del rango.

En JavaScript:

```js
function generateNumber(min = 0, max = 1) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

generateNumber(1, 3) // 2
generateNumber(43, 22) // 37
generateNumber(309, 223) // 229
```
