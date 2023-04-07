// Tipo de navegador

const ancla = document.getElementById("navegador"); //tomo el elemento "ancla" de mi html y guardo en una variable
const array = navigator.userAgentData.brands; // guardo en una variable el array

const fragment=document.createDocumentFragment(); //creo el fragment

console.log(ancla);
console.log(array);
console.log(location.href);

for (const el of array) { //para cada elemento del array: creo un parrafo,
   const p=document.createElement("p"); //a ese parrafo agrego el elemento(innerHTML=el)
   p.innerHTML= `Navegador: ${Object(el.brand)}, versión: ${Object(el.version)}`;  //PARA ACCEDER AL VALOR DE CADA ELEMENTO DE UN OBJETO DENTRO DE UN ARRAY: >> Object.values(obj) <<
   fragment.append(p) //al fragment le hago un append del parrafo
}
ancla.appendChild(fragment) // cuando termina eso, agrego un appendChild del fragment al ancla

/*Metodos array:
*   -> forEach: ejecuta una funcion para cada elemento del array. NO retorna nada

            array.forEach(element => {
                ...
            }); 
            
        ó

            array.forEach(function(valorElemento, indexElemento) => {
                  ...
            });

    -> map(): Para crear un NUEVO array con nuevos valores a partir de un array, es decir, retornar algo, debo usar MAP()

            array.map(() => {
                return ...
            })
    
*/

/////////////////////////////////////
const array2=[
    {nombre: "pepe", edad: 40},
    {nombre: "lorena", edad: 45},
    {nombre: "lucas", edad: 35},
    {nombre: "maria", edad: 15},
]

const ancla2 = document.getElementById("ancla2");
const fragment2=document.createDocumentFragment();

for ( const e of array2){
    const lista = document.createElement("li");
    lista.innerHTML=Object.values(e);
    fragment2.append(lista)
}
ancla2.appendChild(fragment2)

///////////////////////////////

const texto="Mi primer proyecto JS";
const hDos=document.createElement("h2");
hDos.innerHTML="";
document.getElementById("marquesina").append(hDos);
let counter = 0;
const intervalo = setInterval(
    ()=>{
        if(counter < texto.length){
            hDos.innerText += texto[counter];
            counter++;
        }else{
            hDos.innerText= "";
            counter=0;
        }
}, 500);

/**
 * *******>>>> IMPORTANTE <<<<<*******
 * 
 * Cuando declaro una funcion con () le estoy diciendo a js "ejecutate" sin esperar que suceda cierto evento. 
 * Debo declarar el nombre de la funcion sin los () para que suceda sólo cuando pase tal evento!!!
 * 
 * //////////////////////////////////////////////////////////////////
*/

const vengadores = [
    {nombre: "Tony", apellido: "Stark", alias: "Iron-Man"},
    {nombre: "Steve", apellido: "Rogers", alias: "Capitan America"},
    {nombre: "Bruce", apellido: "Banner", alias: "Hulk"},
    {nombre: "Natasha", apellido: "Romanoff", alias: "Black Widow"},
    {nombre: "Clint", apellido: "Barton", alias: "Hawkeye"},
  ];

/*
>>> Para mostrar todos los nodos con los valores del array vengadores:

    const fragment3 = document.createDocumentFragment();
    const ancla3 = document.getElementById("div3");
    
    vengadores.forEach(pjes => {
        const p3 = document.createElement("p");
        p3.innerHTML = `Nombre: ${Object(pjes.nombre)}, apellido: ${Object(pjes.apellido)}, alias: ${Object(pjes.alias)}`;
        fragment3.append(p3);
    });
        ancla3.appendChild(fragment3);
*/

const divPjes = document.querySelectorAll(".pjes");

const uno = document.getElementById("pjes1");
const dos = document.getElementById("pjes2");
const tres = document.getElementById("pjes3");
const cuatro = document.getElementById("pjes4");
const cinco = document.getElementById("pjes5");

const ancla3=document.querySelector(".ancla3")

for (const e of divPjes) {
    e.addEventListener("click", ()=>{
        
        const p3 = document.createElement("p");
        
        switch (e) {
            case uno:  
                p3.innerHTML = `Nombre: ${Object(vengadores[0].nombre)}, Apellido: ${Object(vengadores[0].apellido)}, Alias: ${Object(vengadores[0].alias)}`; 
                ancla3.appendChild(p3)       
                break;
            case dos:
                p3.innerHTML = `Nombre: ${Object(vengadores[1].nombre)}, Apellido: ${Object(vengadores[1].apellido)}, Alias: ${Object(vengadores[1].alias)}`; 
                ancla3.appendChild(p3) 
                break;
            case tres:
                p3.innerHTML = `Nombre: ${Object(vengadores[2].nombre)}, Apellido: ${Object(vengadores[2].apellido)}, Alias: ${Object(vengadores[2].alias)}`; 
                ancla3.appendChild(p3) 
                break;
            case cuatro:
                p3.innerHTML = `Nombre: ${Object(vengadores[3].nombre)}, Apellido: ${Object(vengadores[3].apellido)}, Alias: ${Object(vengadores[3].alias)}`; 
                ancla3.appendChild(p3) 
                break;
            case cinco:
                p3.innerHTML = `Nombre: ${Object(vengadores[4].nombre)}, Apellido: ${Object(vengadores[4].apellido)}, Alias: ${Object(vengadores[4].alias)}`; 
                ancla3.appendChild(p3) 
                break;
            }
        })
};

//////////////////////////////////////////////////////////// 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];    

const btnpar=document.getElementById("par")
const btnimpar=document.getElementById("impar")
const btn = document.querySelectorAll(".botones")

for (const elBtn of btn) {
    
    elBtn.addEventListener("click", ()=> {
        switch (elBtn) {
            case btnpar:
                const nrospares = numeros.filter(numero => numero % 2 === 0);
                alert(nrospares)
                break;
            case btnimpar:
                const nrosimpares = numeros.filter(numero => numero % 2 !== 0);
                alert(nrosimpares)
                break;
        }
    })
}
            
///////////////////////////////////////
/*
* --------->>>  3 formas de trabajar con eventos <<----------------

    ==> Mediante atributo de elemento HTML: en el html agrego, al elemento correspondiente, el evento que quiero. Sólo en este caso NO se ejecuta la función cuando uso los ().
        -> ej: <button onclick="nombreFuncion()">...</button> 
        Entonces en el archivo js tenemos que tener la funcion nombreFuncion(){...};

    ==> Mediante propiedad del objeto HTML: desde js tomamos/creamos un elemento HTML (etiqueta).
        -> ej: boton.onclick = nombreFuncion;

    ==> Mediante API Web EventTarget (forma más actualizada) - permite agregar listener. Puedo agregar más de una funcionalidad a un elemento. O eliminarlo:
        -> addEventListener
        -removeEventListener
        -> ej: button.addEventListener("click", (event)=>{...})
                si hacemos un console.log(event) nos da el Objeto Evento.


--------> Elemento Dinamico: elemento HTML creado con js
        ==> Si tengo 2 archivos js, en el primero tengo la funcionalidad, el evento, y en el segundo se crea el eleento, voy a tener un error. Porque cuando se ejecuta el evento, el elemento todavia no se creó en el HTML. Entonces, para eso puedo hacer lo siguiente:

            document.addEventListener("click", (e)=>{    //acá agrego al document el evento escuchador
                if(e.target.id === "idElement") {       // uso la condición if y digo que si el elemento target tiene el id "tal"... entonces realizo la acción...
                    const element = document.getElementById("nombreIdElement");
                    element.style.color = "blue";
                }
            })

            -> Sino tengo que agregar primero el archivo que crea los elementos, y después el de las funcionalidades, eventos...

*/