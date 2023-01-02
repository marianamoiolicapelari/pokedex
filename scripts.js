const pokemonName = document.querySelector(".pokemon-name");
const pokemonId = document.querySelector(".pokemon-id");
const pokemonType = document.querySelector(".type");
const cardImg = document.querySelector(".card-img");
const card = document.getElementById("card-bg");
const cardPrincipal = document.querySelector(".card-principal");
const cardBack = document.querySelector(".card-back");
const pokemonXp = document.querySelector(".xp");
const pokemonHabilities = document.querySelector(".habilities");
const reloadPage = document.querySelector(".logo-menu");

const btnPokemon = document.getElementsByClassName("btn-pokemon");
const menu = document.getElementById("menu");

/**
 * Função fetch criada para o consumo de API
 *
 * @param {object} pokemon
 * @returns data
 */
const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await APIResponse.json();
  return data;
};

/**
 * Função criada para renderizar os cards com os pokemons.
 *
 * @param {number} id
 * @param {string} imagem_name
 * @param {string} background
 * @return void
 */
const renderPokemon = async (id, imagem_name, background) => {
  const pokemon = await fetchPokemon(id);

  pokemonName.innerHTML = pokemon.name;
  pokemonId.innerHTML = pokemon.id;
  pokemonType.innerHTML = pokemon.types[0].type.name;
  pokemonXp.innerHTML = `XP: ${pokemon.base_experience}`;
  pokemonHabilities.innerHTML = pokemon.abilities[1].ability.name;
  cardImg.src = `./assets/${imagem_name}`;
  card.setAttribute(
    "style",
    `background: linear-gradient(to top,  #fff8bf 0% 50%, ${background} 50% 100%) !important`
  );
};

/**
 * Função criada para fazer a troca entre os cards frente e verso
 *
 * @return void
 */
const exchangeCards = () => {
  cardBack.style.display = "none";
  cardPrincipal.style.display = "block";
};

const btns = [
  {
    imagem: "bulbasaur.png",
    id: "1",
    background: "#59bc38",
    idCss: "btn-bulbasaur",
    label: "Bulbasaur",
  },
  {
    imagem: "charmander.png",
    id: "4",
    background: "#F68C00",
    idCss: "btn-charmander",
    label: "Charmander",
  },
  {
    imagem: "dragonite.png",
    id: "149",
    background: "#FABE00",
    idCss: "btn-dragonite",
    label: "Dragonite",
  },
  {
    imagem: "gyarados.png",
    id: "130",
    background: "#3DD4FB",
    idCss: "btn-gyarados",
    label: "Gyarados",
  },
  {
    imagem: "pikachu.png",
    id: "25",
    background: "#fffc22",
    idCss: "btn-pikachu",
    label: "Pikachu",
  }
];

btns.forEach((item) => {
  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "btn-menu");
  btn.classList.add("btn-pokemon");
  btn.setAttribute("id", `${item.idCss}`);
  btn.setAttribute("data-pokemon-img", `${item.imagem}`);
  btn.setAttribute("data-pokemon-id", `${item.id}`);
  btn.setAttribute("data-pokemon-color", `${item.background}`);
  btn.innerHTML = item.label;
  menu.appendChild(btn);
});


Array.from(btnPokemon).forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const pokemonImage = event.target.getAttribute("data-pokemon-img");
    const pokemonId = event.target.getAttribute("data-pokemon-id");
    const pokemonBackground = event.target.getAttribute("data-pokemon-color");
    renderPokemon(pokemonId, pokemonImage, pokemonBackground);
    exchangeCards();
  });
});


reloadPage.addEventListener("click", () => {
  location.reload();
});
