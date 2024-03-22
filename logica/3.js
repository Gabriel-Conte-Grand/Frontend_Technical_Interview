/*
 Dado un array de números enteros positivos, donde cada uno
 representa unidades de bloques apilados, debemos calcular cuantas unidades
 de agua quedarán atrapadas entre ellos.
 
 - Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].
 
   💧💧💧🪣💧💧
   💧💧💧🪣💧💧
   🪣💧💧🪣💧💧
   🪣💧🪣🪣💧🪣
   🪣💧🪣🪣💧🪣
   🪣💧🪣🪣🪣🪣
 
   Representando bloque con 🪣︎ y agua con 💧, quedarán atrapadas 7 unidades
   de agua. Suponemos que existe un suelo impermeable en la parte inferior
   que retiene el agua.
 */

const waterBlocks = (value) => {
  let aguaAtrapada = 0

  let punteroIzq = 0
  let punteroDerecho = value.length - 1

  let maxIzq = 0
  let maxDer = 0

  while (punteroIzq < punteroDerecho) {
    if (value[punteroIzq] <= value[punteroDerecho]) {
      if (value[punteroIzq] >= maxIzq) {
        maxIzq = value[punteroIzq]
      } else {
        aguaAtrapada += maxIzq - value[punteroIzq]
      }
      punteroIzq++
    } else {
      if (value[punteroDerecho] >= maxDer) {
        maxDer = value[punteroDerecho]
      } else {
        aguaAtrapada += maxDer - value[punteroDerecho]
      }
      punteroDerecho--
    }
  }

  return aguaAtrapada
}

// waterBlocks([4, 0, 3, 6, 1, 3])
console.log(waterBlocks([4, 0, 3, 6, 1, 3]))
