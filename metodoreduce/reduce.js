/**
 * METODO REDUCE() Y FN PIPELINE
 */


// el metodo reduce(resultado, valorActual) recibe una CB que toma 2 parametros y retorna el resultado de la ejecución para ser utilizado por la siguiente Fn almacenada en el array
//el primer parametro que recibe la CB es el valor previo, es decir el resultado de haber ejecutado la Fn anterior
//en el otro parametro almacenamos el valor actual del array


// (() => {
//     //para que funcione reduce() tengo que tener un array y un unico valor.
//     const valorInicial = 0;
//     const numeros = [1, 2, 3]

//     const resultado = numeros.reduce((valorAnterior, valorActual) => {
//         return valorAnterior + valorActual;
//     }, valorInicial);
//     console.log(`Resultado obtenido con reduce(): ${resultado}`);

//     //una Fn pipe (de pipe line, ejecución uno atras de otro) utiliza el reduce() para utilizar la acumulacion de resultado en distintas Fn
//     //Una pipe function es una función que acepta una serie de funciones (array), que procesan un parámetro de entrada y devuelven una salida que será la entrada de la siguiente función.
//     //(es como usar un forEach (programacion imperativa) que recibe 2 parametros y utiliza condicional 'if') la diferencia es que con pipeline puedas plantear distintas fn con diferentes logicas, y cada fn depende del rdo de la anterior. Es mas prolijo y 'declarativo'

//     const sumar = (resultado) => resultado + 2;
//     const multiplicar = (resultado) => resultado * 4;
//     const restar = (resultado) => resultado - 3;

//     const arrayOperaciones = [sumar, multiplicar, restar] //primero ejecuto sumar, el rdo lo uso para multiplicar, y a ese rdo lo uso para restar.
//     //necesita un valor inicial y el array de Fn
//     function pipeline (valorInicial, arrFunciones) {
//         //la fn cb en este caso, recibe el rdo como valor inicial y como valor actual la fn actual
//         return arrFunciones.reduce(function(resultado, fnActual){
//             //retorna la ejecución de la fn actual sobre el valor del resultado
//             return fnActual(resultado)
//             //arrancando con el valor inicial
//         }, valorInicial)
//     }
//     //guardo el rdo en la variable 'rdo1' a la fn pipeline le paso el valorinicial y el array de fn:
//     const resultado1 = pipeline(0, arrayOperaciones);
//     console.log(`Resultado obtenido con la fn pipeline: ${resultado1}`);

// })();

/**
 * Obtener valor final dependeinte de valores anteriores con Fn callback
 */

// (()=>{
    // function ajax (url) {
    //     const xhr = new XMLHttpRequest() //esto quedo en desuso, hoy en día se usa fecth()
    //     xhr.response = 'json'
    //     xhr.open('GET', url)
    //     xhr.send()
    //     return xhr
    // }
//         const getUsers = ajax('https://pokeapi.co/api/v2/pokemon/')
//         getUsers.addEventListener('load', ()=>{
//             try {
//                 const Users = JSON.parse(getUsers.response)
//                 if(typeof Users !== 'object'){
//                     throw new Error('error de comunicación')
//                 };
//                 const div1 = document.querySelector('.div')

//                 //     Users[results].forEach(el => {
//                 //         const p = document.createElement('p')
//                 //         p.textContent = el.results
//                 //         div1.append(p)
                    
//                 // });


//                 console.log(Users.results);
//             } catch (error) {
//                 console.log(error);
//             };
            
            
//             /**if( getBooks.status === 200){
//             }else{
//                 console.log('hubo un error');
//             }=> esto reemplazamos con 'try...catch' */
//         })
// })();

/*
* Combina Pipeline con asincronia utilizando el objeto Promise => fetch()
        Fetch --> retorna un Objeto Promise que nos permite encadenar Fn pipeline para usar las respuestas de las peticiones AJAX en la siguiente ejecución (.then(cb)):
        --> Permite encadenar en esas ejecuciones el manejo de errores (catch(cb)) --> aplica a todos los encadenamientos de la Fn .then()
        */


let url = "https://pokeapi.co/api/v2/pokemon/";
// (() => {
//     //primero creo la promise
//     const promise = fetch(url);
//     console.log('valor inicial del pipeline', promise);
//     promise //la promesa es de que va a recibir una response
//         .then((response)=> {
//             console.log('trabajo con el valor retornado con la primera ejecucion del pipeline (return)', response);
//             //acá manejo el error
//             if(!response.ok){ //cuando la respuesta no sea ok (true), tiro error:
//                 throw new Error('Error de comunicación')
//             }
//             //obtivumos la response en dato tipo JSON ahora lo convertimos a objeto de js
//             return users = response.json(); 


//     })
//     .then((users) =>{
//         console.log(users.results);
//         const usersID = [];
//         console.log(usersID);
//         const ul = document.querySelector(".fetch")

//         for (let i = 0; i < users.results.length; i++) {
//             const elementos = users.results[i]['name']
//             const li = document.createElement("li")
//             li.textContent = elementos;
//             ul.appendChild(li)
//         }
//     })  
//     .catch((error) => console.log(error));
// })();
//En la Fn pipeline, en la fetch, el valor inicial es la promise

/**
 * FUNCIONES ASYNC
 * ==> Trabajan con el Object Promise pero lo hacen de forma "sincronica"
 * 
 * => async function sarasa(){
 *       await Object Promise
 * }
 * La palabra reservada 'await' sólo puede usarse si la Fn declarada tiene la palabra 'async'
 */

async function asyncFetch(url){
    //obtengo la respuesta :
    const response = await fetch(url);
    console.log(response);
    //esto significa que tengo acceso a la clave 'ok', entonces:
    if(!response.ok){
        return new Error('Error de comunicación')
    }
    return response.json();
}
//Fn anonima autoimbocada que tiene async
(async ()=>{
    try {
        const users = await asyncFetch(url)
        //la const users es un Error??
        if(users instanceof Error){
            throw users;
        }
        const ul = document.querySelector(".fetch")
        for (let i = 0; i < users.results.length; i++) {
            const elementos = users.results[i]['name']
            const li = document.createElement("li")
            li.textContent = elementos;
            ul.appendChild(li)
        }

    } catch (error) {
        console.log(error);
    }
})();