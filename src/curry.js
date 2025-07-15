// Función original que suma 3 números
// Esta es la función que queremos "curry" (convertir en función currificada)
function sum(a, b, c) {
    return a + b + c;
}

// Función curry que convierte una función normal en una función currificada
// La currificación permite llamar a una función con menos argumentos de los que espera
// y devuelve una nueva función que espera los argumentos restantes
function curry(fn) {    
    // Retorna una función curried que puede recibir argumentos parciales
    return function curried(...args) {
        // Si ya tenemos todos los argumentos necesarios (fn.length = número de parámetros)
        // ejecutamos la función original con todos los argumentos
        if (args.length >= fn.length) {
            return fn(...args);
        }
        // Si no tenemos todos los argumentos, retornamos una nueva función
        // que "recuerda" los argumentos ya pasados usando bind
        // bind(null, ...args) crea una nueva función con los argumentos "pre-aplicados"
        return curried.bind(null, ...args);
    }
}

// Creamos una versión currificada de la función sum
const curriedSum = curry(sum);

// Ejemplos de uso de la función currificada:
// 1. Llamada con argumentos uno por uno: (1) -> (2) -> (3) -> resultado
console.log(curriedSum(1)(2)(3));   // 6

// 2. Llamada con argumentos parciales: (1,2) -> (3) -> resultado  
console.log(curriedSum(1, 2)(3));   // 6

// 3. Llamada con todos los argumentos de una vez: (1,2,3) -> resultado
console.log(curriedSum(1, 2, 3));   // 6
 