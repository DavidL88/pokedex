const BASE_API = 'https://pokeapi.co/api/v2/'

export async function getPokemon(id) {
    const response = await fetch(`${BASE_API}pokemon/${id}/`)
    const data = response.json()
    return data
}

export	async function getSpecies(id) {
    const response = await fetch(`${BASE_API}pokemon-species/${id}/`)
    const data = await response.json()
    return data
}

// export async function getSpecies(id) {
//     let data = {};
//     try {
//         const response = await fetch (`${BASE_API}pokemon-species/${id}/`);
//         data = await response.json();
//     }
//     catch (error) {
//         data = {
//             flavor_text_entries: [
//                 {
//                     flavor_text: "Este pokémon aún no existe, ingresa otro número.",
//                     laguage: {
//                         name: "es",
//                     }
//                 }
//             ]
//         }
//     }
//     return data;
// }
