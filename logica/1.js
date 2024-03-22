// Debes escribir un programa que encuentre la frecuencia con que aparecen los distintos caracteres (letras y números) dentro de una cadena de texto. El resultado se devuelve una matriz de objetos. Cada uno de estos objetos tiene 2 campos: carácter (caracter) y número de veces que aparece (veces). La matriz estará ordenada por el campo carácter. No se diferencia entre mayúsculas y minúsculas ni entre vocales acentuadas.

// Ejemplo:

// contarCar("Hoy ya es día 10")

// deberá devolver:

// {car: '0', veces: 1}
// {car: '1', veces: 1}
// {car: 'a', veces: 2}
// {car: 'd', veces: 1}
// {car: 'e', veces: 1}
// {car: 'h', veces: 1}
// {car: 'i', veces: 1}
// {car: 'o', veces: 1}
// {car: 's', veces: 1}
// {car: 'y', veces: 2}

const contarCar = (value) => {
  const formatedString = value
    .toLowerCase()
    .split(" ")
    .join("")
    .normalize("NFD") //reemplaza vocales acentuadas
    .replace(/[\u0300-\u036f]/g, "")

  const counter = {}

  for (let i = 0; i < formatedString.length; i++) {
    const character = formatedString[i]

    if (
      (character >= "a" && character <= "z") ||
      (character >= "0" && character <= "9")
    ) {
      counter[character] = counter[character] ? counter[character] + 1 : 1
    }
  }

  const result = Object.keys(counter).map((character) => {
    return { car: character, veces: counter[character] }
  })

  result.sort((a, b) => a.car.localeCompare(b.car))

  return result
}

// contarCar("Hoy ya es día 10")
console.log(contarCar("Hoy ya es día 10"))
