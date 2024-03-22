// Lee detallada mente la imagen "./code_example.png" y realiza un analisis de su funcionalidad, y como lo podrias mejorar
//Pista, el codigo presentado handlea dos diferentes tipos de tokens (api token, session token)

import image from "./code_example.png"

//
//
//
//  * Las funciones updateCurrency y getCurrency generan dos veces la misma variable "config", consumiendo mas memoria de lo que deberian.
//      Se puede generar una variable externa a la que accedan las dos funciones.
//      Tambien se puede considerar generar una instancia de Axios que ya tenga el token,
//     y que esta pueda ser reutilizada en distintos lugares. Ya las funciones no necesitarian el token como prop
//
//  * Noto que se guarda info delicada del usuario (user y principalmente la password) como variable de entorno, esto no es seguro.
//    Una mejor alternativa es utilizar NextAuth donde se puede manejar el sistema de JWT y setear la duracion del token para la sesion.
//
//
//
//
//
//
