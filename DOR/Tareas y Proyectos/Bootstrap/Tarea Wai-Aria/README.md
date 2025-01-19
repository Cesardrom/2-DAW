## Tarea Wai-Aria

#### Acordeon

```sql
    <div class="accordion" id="accordionExample" role="tablist">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" role="tab" tabindex="0">
                                Acordeón Item 1
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" role="tabpanel">
                            <div class="accordion-body">
                                Contenido del acordeón 1.
                            </div>
                        </div>
                    </div>
                </div>
```

- Utilizamos role=tablist para que los lectores de pantalla lean correctamente los contenidos del acordeon
- Tambien aria-expanded=false Indica si el acordeón está expandido o colapsado. Esto es crucial para que los usuarios de tecnologías asistivas comprendan el estado actual del acordeón.
- aria-controls=collapseOne Este atributo establece una relación entre el botón y el contenido que controla, permitiendo a los usuarios saber qué contenido se mostrará o se ocultará al interactuar con el botón.
- role=tab indica como actua que este boton actua como una pestaña 
- role=tabpanel Indica que este div es un panel de contenido asociado a la pestaña activa.

#### Boton

```sql
<button type="button" class="btn btn-primary" aria-label="Botón Primario" tabindex="0">Botón Primario</button>
```
- aria-label=Botón Primario Hace que el lector de pantalla lea el texto puesto indicando asi su funcion
- tabindex=0 Asegura que el botón sea parte del orden de tabulación

#### Tarjeta

```sql
<div class="card" style="width: 100%;" role="region" aria-labelledby="cardTitle">
```
- role=region Indica que este div es una región importante del contenido. 
- aria-labelledby=cardTitle Establece una relación entre la tarjeta y su título, permitiendo que los usuarios comprendan el propósito del contenido de la tarjeta.

#### Toast

```sql
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" aria-labelledby="toastTitle" aria-describedby="toastDescription">
```
- role=alert Indica que este elemento es un mensaje de alerta que debe ser anunciado por los lectores de pantalla tan pronto como se muestre.
- aria-live=assertive Indica que el contenido de este toast es importante y debe ser anunciado inmediatamente por el lector de pantalla.
- aria-atomic=true Indica que el lector de pantalla debe anunciar el contenido completo del toast en lugar de solo las partes que han cambiado.
- aria-labelledby=toastTitle Proporciona una referencia al título del toast.
- aria-describedby=toastDescription Proporciona una descripción adicional del contenido del toast.

#### Offcanvas

```sql
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" role="dialog" aria-labelledby="offcanvasLabel" aria-describedby="offcanvasDescription">
```
- role=dialog Indica que este elemento es un diálogo.
- aria-labelledby=offcanvasLabel Establece una relación entre el offcanvas y su título.
- aria-describedby=offcanvasDescription Proporciona una descripción adicional del contenido del offcanvas.