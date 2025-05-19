import { fetchCharacters } from "./list.js"
const promise = new Promise((resolve, reject) => {
    var name = 'João'

    if (name != 1) {
        resolve('Promessa concluida')
    } else {
        reject('Promessa não concluida')
    }
})

promise.then((data) => {
    // tratando a resposta
    return data.toUpperCase()
}).then((data) => {
    // manipulando a resposta
    console.log(data);
}).catch((error) => {
    console.log(error)
})

const host = 'https://dattebayo-api.onrender.com'

fetch(`${host}/characters`, {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
}).then((response) => {
    return response.json()
}).then((data) => {
    const personagens = data.characters;
    let ids = [];
    let persona = [];
    for (let count = 0; count < personagens.length; count++) {
        ids.push(personagens[count].id)
    }

    console.log(ids)

    async function list() {

        for (let i = 0; i < ids.length; i++) {

            const temp = await fetchCharacters(ids[i])
            persona.push(temp)
        }
        console.log(persona)
    }
    list()

}).catch((error) => {
    console.log(error)
})