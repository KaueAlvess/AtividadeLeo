const API_HOST = 'https://dattebayo-api.onrender.com'

export async function fetchCharacters(a) {
    try {
        const response = await fetch(`${API_HOST}/characters/${a}`)

        if (!response.ok) {
            throw new Error(`Erro: ${response.statusText}`)
        }

        const data = await response.json();
        const nome = data.name;



        return nome;
    } catch (error) {
        console.error(error)
        return []
    }
}