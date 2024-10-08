* Los vectores son una pieza basica en la representacion de fenomenos fisicos
  * Nos referimos al vector euclidiano, tambien conocido como vector geometrico
  * Generalmente se dibuja como una flecha con la que se ponen de manifiesto
      propiedades como la direccion y la magnitud.

Imagina una forma circular en un espacio de dos dimensiones (el canvas). Imagina
que la bola tiene dos propiedades, posicion y velocidad. Podria tener otras como
aceleracion, friccion, una posicion final, viento...

Si te fijas cada una de estas propiedades necesita dos variables para ser representada.
Si el espacio fuese 3D, necesitariamos 3 variables.

El uso de vectores permite simplificar el codigo, algo como:

```javascript
let x
let y
let xspeed
let yspeed
```

puede ser expresado como:

```javascript
let position
let acceleration
```

En este momento, la utilidad de los vectores permite organizar mejor el codigo.

Los vectores aportan ademas un conjunto de operaciones matematicas que seran
usadas una y otra vez cuando programemos movimiento.

---

# Vectores en P5.js

Puedes pensar en un vector como:

* La diferencia entre dos puntos
* Instrucciones para ir del punta A al punto B

Ejemplos:

* (-15, 3): Quince pasos al oeste, gira y tres pasos al norte.
* (3, 4): 3 pasos al este, gira y 4 pasos al norte.

Esta instruccion que hace mover a nuestra bola es un vector, con su magnitud,
como de lejos tiene que ir, y su direccion, que camino debe tomar.

## Velocidad, posicion, aceleración

### Vector posicion

Respecto a la posicion, puede pensarse en ella como el recorrido desde el punto inicial (0,0) al punto actual.

Vemos que la velocidad es independiente de la posicion. Usamos el vector velocidad para especificar el cambio de posicion en cada frame.

```js
let position = createVector(100, 100);
let velocity = createVector(1, 3.3);
```

### Vector velocidad

Este vector establece la velocidad del objeto, definida como la ratio de cambio en la posicion del objeto respecto al tiempo. El vector determina la posicion del objeto para cada frame de la animacion. La siguiente posicion es igual a aplicar la velocidad a la posicion actual.

El vector velocidad no especifica un cambio entre dos puntos para toda la animacion. Especifica el desplazamiento para cada frame o para cada unidad de tiempo que manejemos.

### Vector aceleracion

La aceleracion es la tasa de cambio de la velocidad. La aceleracion afecta a la velocidad que afecta a la posicion.

Programar movimiento es encontrar el algoritmo para calcular la aceleracion.

Tipos de aceleracion:

* Constante
* Aleatoria
* Hacia un punto
