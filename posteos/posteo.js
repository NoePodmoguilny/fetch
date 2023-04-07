const url = 'https://jsonplaceholder.typicode.com';
const divPost = document.getElementById("divPost");

//obtenemos la respuesta
async function asyncFetch (url){
    const response = await fetch(url);
        if(!response.ok){
            return new Error('Error de comunicación')
        }
        return response.json();
}
//manejamos la respuesta para obtener los nombres de cada user
(async()=>{
    try {
        const users = await asyncFetch(`${url}/users`)

        if (users instanceof Error)
        throw users;

        const usersID = [];

        const ul = document.querySelector('.async');
            
            users.forEach(user => {
                const li = document.createElement('li')
                li.textContent = user.name
                li.id = user.id
                usersID.push(user.id)
                ul.appendChild(li)
        })
            //a cada id le agregamos su post, para eso hacemos otro fetch con los posteos
            usersID.forEach((id)=>{
                (async()=>{
                    const name = document.getElementById(id)
                    const posts = await asyncFetch(`${url}/posts?userId=${id}`)

                    const ul = document.createElement('ul')
                    for(const post of posts){
                        const li = document.createElement('li')
                        li.textContent = `Titulo: ${post.title}`;
                        ul.appendChild(li)
                    }
                    name.appendChild(ul)
                })();
            })
    }
        
    catch (error) {
        console.log(error);
    }
    
})();
