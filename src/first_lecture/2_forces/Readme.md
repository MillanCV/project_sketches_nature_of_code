Este capitulo te explicara el concepto de fuerza y su relacion con la
aceleracion.

Hacia el final del capitulo habras construido un motor de fisicas simples y
entenderas como los objetos se mueven en el canvas respondinedo a una variedad
de fuerzas ambientales.

Un motor de fisicas es un programa o libreria que simula el comportamiento de un
objeto en un entorno fisico. Estos motores pueden ser muy precisos o de tiempo
real. Haras un motor rudimentario, enfocado a ser facil de entender y rapido.

# Leyes del movimiento de newton

El concepto fuerza tiene diferentes significados. Puede indicar una intensidad
fisica o una influencia.

Nos quedamos con la definicion de Isaac Newton, "una fuerza es un vector que
causa que un objeto con masa acelere".

### Primera ley del movimiento

* "Un objeto en reposo permanece en reposo, un objeto en movimiento permanece en
  movimiento".
  * Podemos precisar diciendo que un objeto en movimiento tiene una velocidad
      y direccion constantes a menos que una fuerza rompa el balance.
  * En la tierra hay fuerzas ambientales actuando sobre los objetos, como la
      gravedad o la resistencia del aire. La velocidad de un objeto solo sera
      constante si las fuerzas se cancelan mutuamente o en ausencia the fuerzas.
      Este es el llamado estado de equilibrio.
  * Si lo reducimos al canvas de p5js podemos reescribir esta ley como:
    * "La velocidad de un objeto permanecera constante si esta en estado de
          equilibrio"

### Tercera ley del movimiento

* "Para cada accion hay una reaccion igual y de sentido contrario"
  * Si empujas un muro este ofrece resistencia con igual fuerza y de sentido
      contrario.
  * "La fuerza siempre ocurre en pares. Las dos fuerzas son de igual magnitud
      pero en direcciones opuestas".
  * Podria parecer que, segun esto, ambas fuerzas deberian cancelarse. Pero
      porque dos fuerzas sean iguales, no significa que el movimiento lo sea. El
      resulta de aplicar una fuerza sobre un objeto depende de una variedad de
      factores.
  * En terminos de p5js:
    * "Si calculas un p5.Vector llamado f que representa la fuerza de un
          objeto A sobre un objeto B, debes aplicar la fuerza opuesta de B sobre
          A. Puedes calcular esta fuerza con p5.Vector.mult(f, -1)".
    * A menudo no sera necesario adherirse a la tercera ley de Newton, ya
          que no buscamos precision absoluta.

### Segunda ley de Newton

* "La fuerza equivale a masa por aceleracion".
  * Tengamos en cuenta que masa no es igual que peso. La masa representa la
      cantidad de materia de un objeto. El peso es, tecnicamente, la fuerza de
      la gravedad sobre un objeto. Peso es la fuerza de la gravedad por la masa.
      El peso se mide en newtons. Mientras la masa es cte, el peso varia segun
      la gravedad
  * Relacionado con la masa, esta el concepto de densidad, que es la cantidad
      de masa por unidad de volumen.
  * En el mundo de p5js:
    * Empezamos pensando que cualquier objeto tiene masa igual a 1, esto da
          lugar a que la fuerza sea igual a la aceleracion.
      * Los ejemplos del capitulo anterior responden a esta asociacion.
      * Fuerza -> Aceleracion -> Velocidad -> Posicion

---

# Acumulacion de fuerzas

Sobre un objeto pueden actuar varias fuerzas. En este caso la aceleracion es
igual a la suma de todas las fuerzas dividida por la masa.

A la hora de programar el objeto es necesario que este sepa.

La aceleracion no es acumulativa a lo largo del tiempo, antes de actualizarla se
debe poner a cero.

La aceleracion no tiene memoria! La velocidad si porque es constante segun las
leyes de Newton.

---

# Paso del tiempo (time step)

HAsta ahora no hemos tenido en cuenta el paso del tiempo, la "velocidad" con la
que se actualiza la simulacion.

Esta "velocidad" o "tasa" (rate) a menudo se incorpora como variable en los
simuladores fisicos, a menudo denotada como dt (delta time).

Ahora mismo asumimos que cada ciclo de dibujado representa un paso del tiempo.

---

# Masa

Hemos estado trabajando sin pasa. Para incorporarla a nuestro "mover" debemos
pensar en la unidad de medida

### Unidad de medida

En el canvas, contamos como el pixel como unidad de medida para la posicion, la
velocidad o la aceleracion. Pero no podemos aplicarla a la masa. De forma basica
vamos a equiparar el tamano de un objeto a su masa. Algo que no ocurre en el
mundo real.

La masa es un escalar, es un numero que describe la cantidad de masa de un
objeto.

---

# Creando fuerzas

Tenemos dos formas de crear fuerzas:

* Crear una fuerza
* Modelar una fuerza existente

Un inciso, al programar una fuerza de gravedad, los objetos de menor masa
reaccionan con mayor aceleracion de forma inintuitiva. Esto es normal para
fuerzas como las del viento, pero no lo es para la gravedad. Segun Galileo, la
fuerza de la gravedad es relativa a la masa de un objeto, cuanto mas grande un
objeto, mas grande la fuerza de la gravedad.

# Modelar fuerzas

Veremos como modelar tres fuerzas, la friccion, "drag" y atraccion
gravitacional.

Necesitaremos:

* Entender el concepto detras de la fuerza
* Deconstruir la fuerza en dos partes
  * Como calcular la direccion de la fuerza
  * Como calcular la magnitud de la fuerza
* Traducir la formula en codigo p5.js

### Analizando fuerzas

Contiene simbolos -> mirar en el libro "Parsing Formulas

## Friccion

Cuando dos superficies entran en contanco experimentan friccion.

La fricción es una fuerza disipativa, lo que significa que convierte la energia
kinetica del objeto en otra forma, dando la impresion de perdida o disipación.

Al frenar un coche, este usa la friccion para  ralentizar el movimiento de las
ruedas. La energia kinetica se convierte en energia termica.

Un modelo completo incluiria casos separados para la friccion estatica y la
friccion en movimiento. Nos quedamos con esta ultima, por simplicidad.

friccion = -1*u*N*v

Dado que la friccion es un vector, vamos a determinar los dos componentes de su
formula.

* Direccion

''' let friction = this.velocity.copy() friction.normalize() friction.mult(-1)
// A partir de aqui sacamos la direccion '''

* Magnitud

magnitud = u * N

* u = {
  * coeficiente de friccion
  * establece la fortaleza de la fuerza de friccion para una superficie
    particular
    * cuanto mas alta es, mas fuerte es la friccion. }

* N = {
  * fuerza normal
  * es la fuerza perpendicular al objeto moviendose por una superficie
    * un vehiculo presiona el suelo con gravedad, el suelo ejerce una fuerza
    contraria sobre el vehiculo, la fuerza normal. Si el suelo esta inclinado,
    la fuerza normal no apunta en direccion opuesta, sino que es perpendicular
    al suelo }

### Cuando aplicar friccion

La friccion aparece cuando un cuerpo entra en contacto con una superficie,
podemos limitarnos a aplicar friccion cuando una bola choca con el suelo, por
ejemplo.

### Aire y fluidos

La friccion siempre ocurre cuando un cuerpo atraviesa un liquido o gas.

Las fuerzas resultantes tienen nombres diferentes pero significan lo mismo:

* fuerza viscosa
* drag force (fuerza de arraste?)
* resistencia del aire
* fluid resistance

La fuerza del aire es proporcional a la velocidad de un objeto y a su superficie
apuntando en direccion opuesta a la velocidad del objeto.

El efecto es que el objeto frena.

El comportamiento exacto es diferente -> mirar en el libro

Para calcular estas fuerzas entran en juego:

* densidad
* la magnitudad de la velocidad del objeto al cuadrado
* la superficie frontal del objeto presionando sobre el gas o liquido.
* el coeficiente de arrastre, igual al coeficiente de friccion.
* la direccion de la velocidad
  
Para aplicar la fuerza de arrastre de un fluido o un liquido en nuestros
sketches podemos definir el area de influencia.

Para cada elemento vemos si esta contenido en ese area. Si lo esta, le aplicamos
la fuerza.

### Atraccion gravitacional

Desde nuestro punto de vista vemos la gravedad como cosas que caen hacia abajo.

Pero la realidad es mas compleja.

De la misma forma que la Tierra tira de una manzana, la manzana tira de la
tierra.

Es la masividad de la tierra la que empequenece las otras interacciones
gravitatorias.

La fuerza gravitacional entre dos cuerpos es proporcional a la masa de los
cuerpos e inversamente proporcional al cuadrado de la distancia entre ellos.

G es la constante de la gravitacion universal. No es importante para objetos p5
en el canvas. Podemos ajustarla a 1.

En nuestro mundo virtual la masa no es importante, pero podemos jugar con ella
para obtener simulaciones interesantes.

r es el vector unidad que apunta del objeo 1 al objeto 2. se puede calcular
restando la posicion de uno de la del otro

Cuanto mayor sean G y la masa mayor es la fuerza. Cuanto mayor es la distancia
menor es la fuerza.

### Un apunte sobre sistemas de cuerpos

Podemos considerar que un array de objetos es un sistema.
