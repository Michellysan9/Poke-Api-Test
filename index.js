// Ahora que tenemos nuestro HTML y CSS, es hora de darle vida con JavaScript <3

// 1️⃣. Seleccionar los elementos HTML que vamos a utilizar:
// - Imagen de los pokemon
// - Stats de cada uno
// 🤓 Pista: revisa el método document.querySelector()

// Selectores para el Pokemon 1

const pokemon1Img = document.querySelector('.pokemon-1__img');
const pokemon1Hp = document.querySelector('.pokemon-1__hp');
const pokemon1Name = document.querySelector('.pokemon-1__name');
const pokemon1Attack = document.querySelector('.pokemon-1__attack');
const pokemon1Defense = document.querySelector('.pokemon-1__defense');
const pokemon1Type = document.querySelector('.pokemon-1__type');

// Selectores para el Pokemon 2
const pokemon2Img = document.querySelector('.pokemon-2__img');
const pokemon2Hp = document.querySelector('.pokemon-2__hp');
const pokemon2Name = document.querySelector('.pokemon-2__name');
const pokemon2Attack = document.querySelector('.pokemon-2__attack');
const pokemon2Defense = document.querySelector('.pokemon-2__defense');
const pokemon2Type = document.querySelector('.pokemon-2__type');


// 2️⃣. Miremos ahora la API de Pokemon :)
// - Haz un llamado a la URL https://pokeapi.co/api/v2/pokemon/ y analiza cómo devuelve su respuesta
// La API retorna un pokemon https://pokeapi.co/api/v2/pokemon/{ID} si se provee un ID al final.
// 🤓 Pista: Para enfrentar 2 pokemones aleatores, necesitamos hacer 2 llamados a la API con 2 n´¨úmeros aleatorios entre el 1 y el 900

// Función para obtener datos de un Pokémon dado su ID
const getPokemon = async (pokeID) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
    const data = await response.json();
    return data;
  };
  

// 3️⃣ - Crear una función que genere un número random entre 1 y 900.
// Puedes usar esta: 👩🏻‍💻
/* const getRandomNumber = (numMin, numMax) => {
  return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}; */

function getRandomNumber(numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}

// 4️⃣ - Asignar un número random al ID de los que serán nuestros pokemons
// Declara 2 variables para cada pokemon y guarda los números que retorna la funci´øn en ellos

// 🤓 Pista: algo como ... const poke1ID = getRandomNumber(1, 900);

const poke1ID = getRandomNumber(1, 900);
const poke2ID = getRandomNumber(1, 900);

// 5️⃣ - Crear una función para traer (fetch) data de la API
// Dale una mirada a la función fetch -> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// Recuerda la URL de la API https://pokeapi.co/api/v2/pokemon/${pokeID}

//Puedes usar esta: 👩🏻‍💻
/* const getPokemon = async (pokeID) => {
  const response = await fetch(` https://pokeapi.co/api/v2/pokemon/${pokeID}`);
  const data = await response.json();
  return data;
}; */

  // Función para actualizar la información de un Pokémon en el DOM
function updatePokemon(pokemonImg, pokemonHp, pokemonName, pokemonAttack, pokemonDefense, pokemonType, data) {
    pokemonImg.src = data.sprites.front_default;
    pokemonHp.textContent = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
    pokemonName.textContent = data.name;
    pokemonAttack.textContent = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
    pokemonDefense.textContent = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
    pokemonType.textContent = data.types.map(typeInfo => typeInfo.type.name).join(', ');
  }
  
  // Función para crear los Pokémon y actualizar el DOM
  const createPokemons = async (pokeID1, pokeID2) => {
    const pokemon1 = await getPokemon(pokeID1);
    const pokemon2 = await getPokemon(pokeID2);
  
    updatePokemon(pokemon1Img, pokemon1Hp, pokemon1Name, pokemon1Attack, pokemon1Defense, pokemon1Type, pokemon1);
    updatePokemon(pokemon2Img, pokemon2Hp, pokemon2Name, pokemon2Attack, pokemon2Defense, pokemon2Type, pokemon2);
  };
  
  

// 6️⃣ - Vamos a crear los pokemons en la función createPokemons.
// Primero Haz varias pruebas a las API para examinar bien qué devuelve, esa data
// será necesaria para popular nuestros elementos HTML
// 🤓 Pista: - Crea una función asíncrona que reciba los 2 ID de los pokemon, es decir los números que obtenemos de llamar la función random
//           - Haz una llamada a la API por cada pokemon, guarda los datos que te devuelve en dos variables: pokemon1 y pokemon2
//           - Toma los elementos HTML que seleccionamos más arriba y utiliza su propiendad innerHTML para añadir la info que necesitamos de la API




// 🎁 Bonus! - Vamos a crear la función fightPokemons que permitirá que los pokemons interactúen y peleen

  // 1. Seleccionar los datos que ahora tenemos en el HTML y que trajimos desde la API: para ambos pokemon: HP, attack, defense y name.


  // 2. Crear una función que calcule el daño hecho a cada pokemon. Necesitamos el poder del atacante y la defensa y los HP del que defiende
  // - Calcular el daño restando el ataque de la defensa, con esto definimos si el pokemon sufrió daño.
  // - Calcular los nuevos HP: Si la defensa es menor a 0, significa que el ataque logró perforarla e hizo daño, en este caso vamos a restar el daño de los HP, si no, la HP debe quedar igual pues no hubo da˜ño
  // En esta función vamos a devolver la nueva HP del pokemon atacado y además el da˜ñó que sufrió. - Luego vamos a necesitar estos datos -

  // Función para calcular el daño
const calculateDamage = (attackerAttack, defenderDefense, defenderHp) => {
    const damage = attackerAttack - defenderDefense;
    const newHp = damage > 0 ? defenderHp - damage : defenderHp;
    return {
      newHp,
      damage: damage > 0 ? damage : 0
    };
  };
  
  // 3. Narrar la batalla ;). Para esto vamos a usar el elemento modal__text, aquí vamos a ir llenando su innerHTML.
  // Empecemos con el Pokemon 1.



  // Ahora calculemos el daño que le hizo a pokemon2 y cuánta vida le queda, usemos la función de calcular daño



  // Vamos a narrar qué pasó en este ataque.Si el pokemon 1 tiene un ataque mayor a la denfesa del pokemon 2, debemos narrar que logra perforar su defensa
  // y describir cuánto daño recibió y cuáles son ahora sus puntos de vida
  // Si el ataque del pokemon 1 no es mayor que la denfesa del pokemon 2, significa que no logra perforarla y por lo tanto no hay daño.


  // Ahora el Pokemon2, mismo procedimiento.


  // Definamos el ganador que sería el más daño haya hecho al otro pokemon.
  // Recordemos que los puntos de daño son negativos!!
  // - Si el daño recibido por pokemon 2 es menor al de pokemon 1, (es decir un mayor número negativo), significa que pokemon 1 hizo más daño, por lo tanto es el gandor!
  // - En caso de que sea menor el daño de pokemon 1, significa que pokemon 2 es el gandor
  // - El último caso posible es que ambos hayan recibido el mismo daño, en ese caso sería un empate.


  // Función para que los Pokémon peleen
  const fightPokemons = () => {
    const pokemon1Hp = parseInt(document.querySelector('.pokemon-1__hp').textContent);
    const pokemon1Attack = parseInt(document.querySelector('.pokemon-1__attack').textContent);
    const pokemon1Defense = parseInt(document.querySelector('.pokemon-1__defense').textContent);
    const pokemon1Name = document.querySelector('.pokemon-1__name').textContent;
  
    const pokemon2Hp = parseInt(document.querySelector('.pokemon-2__hp').textContent);
    const pokemon2Attack = parseInt(document.querySelector('.pokemon-2__attack').textContent);
    const pokemon2Defense = parseInt(document.querySelector('.pokemon-2__defense').textContent);
    const pokemon2Name = document.querySelector('.pokemon-2__name').textContent;
  
    const pokemon1Result = calculateDamage(pokemon1Attack, pokemon2Defense, pokemon2Hp);
    const pokemon2Result = calculateDamage(pokemon2Attack, pokemon1Defense, pokemon1Hp);
  
    const modalText = document.querySelector('.modal__text');
    modalText.innerHTML = `
      ${pokemon1Name} attacks ${pokemon2Name} and does ${pokemon1Result.damage} damage. ${pokemon2Name} has ${pokemon1Result.newHp} HP left.<br>
      ${pokemon2Name} attacks ${pokemon1Name} and does ${pokemon2Result.damage} damage. ${pokemon1Name} has ${pokemon2Result.newHp} HP left.<br>
    `;
  
    if (pokemon1Result.damage > pokemon2Result.damage) {
      modalText.innerHTML += `<br>${pokemon1Name} wins!`;
    } else if (pokemon1Result.damage < pokemon2Result.damage) {
      modalText.innerHTML += `<br>${pokemon2Name} wins!`;
    } else {
      modalText.innerHTML += `<br>It's a tie!`;
    }
  
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.layer').style.display = 'block';
  };
  
  // Event listener para el botón de pelea
  document.querySelector('.button__fight').addEventListener('click', fightPokemons);
  
  // Cerrar el modal
  document.querySelector('.button__modal').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.layer').style.display = 'none';
  });
  


// 7️⃣ - Vamos a practicar eventos en JS, de esta manera vamos a poder controlar cuándo traer pokemons desde la interfaz
// Nuestra función fetch va a traer pokemons cada que el código es ejecutado, es decir cuando la página se recarga
// Vamos a añadir un botón que recargue la página en cada click, así podemos obtener nuevos pokemons random cada vez.
// 🤓 Pista: - Seleccionar el elmento HTML del botón
//           - Llamar a la función createPokemons solo cuando se dé click a ese botón (lee sobre eventListeners https://www.w3schools.com/js/js_htmldom_eventlistener.asp )
// 🕵🏻‍♀️ En nuestra app tenemos 3 botones. El de Catch!, Fight! y el que OK! que aparece en el modal cuando pelean los pokemons
// Cada botón tendrá atado un eventListener que vamos a construir juntos ❤️

document.querySelector('.button__catch').addEventListener('click', () => {
    const poke1ID = getRandomNumber(1, 900);
    const poke2ID = getRandomNumber(1, 900);
    createPokemons(poke1ID, poke2ID);
  });
  
