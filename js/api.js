const BASE_API = "https://pokeapi.co/api/v2/";

export async function getPokemon(id) {
  const response = await fetch(`${BASE_API}pokemon/${id}/`);
  if (!response.ok) {
    throw new Error("Pokémon no encontrado en la API");
  }
  const data = response.json();
  return data;
}

export async function getSpecies(id) {
  const response = await fetch(`${BASE_API}pokemon-species/${id}/`);
  if (!response.ok) {
    throw new Error("Especie de Pokémon no encontrada en la API");
  }
  const data = await response.json();
  return data;
}

// export async function getPokemon(id) {
//   try {
//     const response = await fetch(`${BASE_API}pokemon/${id}/`);

//     if (!response.ok) {
//       throw new Error("Pokémon no encontrado en la API");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     displayErrorMessage(error.message);
//     throw error;
//   }
// }

// export async function getSpecies(id) {
//   try {
//     const response = await fetch(`${BASE_API}pokemon-species/${id}/`);

//     if (!response.ok) {
//       throw new Error("Especie de Pokémon no encontrada en la API");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     displayErrorMessage(error.message);
//     throw error;
//   }
// }

// function displayErrorMessage(message) {
//   const errorAja = document.getElementById("error");
//   errorAja.textContent = message;
// }

// export async function getSpecies(id) {
//   let data = {};
//   try {
//     const response = await fetch(`${BASE_API}pokemon-species/${id}/`);
//     data = await response.json();
//   } catch (error) {
//     data = {
//       flavor_text_entries: [
//         {
//           flavor_text: "Este pokémon aún no existe, ingresa otro número.",
//           language: {
//             name: "es",
//           },
//         },
//       ],
//     };
//   }
//   return data;
// }
