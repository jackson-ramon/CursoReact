# Reducer Hook
1. Es una funcion comun y corriente, NO puede ser asíncrona.
2. Deber ser una funcion pura.
3. Debe retornar un nuevo estado.
4. Usualmente recibe dos argumentos.

## Funcion comun y corriente
const **todo**Reducer = () => {};
Se deba usar la palabra clave de **TODO**.

## Debe de ser una fucion pura
1. No tener efectos secundarios
2. No debe realizar tareas **asincronas**.
3. Debe retornar siempre un estado.
4. No debe de llamar localStorage o sessionStorage.

## Funcionamiento
Toda la informacion debe fluir en una sola linea.
