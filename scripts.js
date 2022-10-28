// const card = document.querySelector('.card')

const pokemonName = document.querySelector('.pokemon-name')
const pokemonId = document.querySelector('.pokemon-id')
const pokemonType = document.querySelector('.type')
const cardImg = document.querySelector('.card-img')
const card = document.querySelector('.card')
const cardPrincipal = document.querySelector('.card-principal')
const cardBack = document.querySelector('.card-back')
const pokemonXp = document.querySelector('.xp')
const pokemonHabilities = document.querySelector('.habilities')

const btnBulbasaur = document.getElementById('btn-bulbasaur')
const btnCharmander = document.getElementById('btn-charmander')
const btnDragonite = document.getElementById('btn-dragonite')
const btnGyarados = document.getElementById('btn-gyarados')
const btnPikachu = document.getElementById('btn-pikachu')

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await APIResponse.json()
  return data
}

const renderBulbasaur = async (pokemon) => {
  const data = await fetchPokemon(pokemon)

  pokemonName.innerHTML = data.name
  pokemonId.innerHTML = data.id
  pokemonType.innerHTML = data.types[0].type.name
  pokemonXp.innerHTML = `XP: ${data.base_experience}`
  pokemonHabilities.innerHTML = data.abilities[1].ability.name
  cardImg.src = "./assets/bulbasaur.png"
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #59BC38 50% 100%)'
}

const renderCharmander = async (pokemon) => {
  const data = await fetchPokemon(pokemon)

  pokemonName.innerHTML = data.name
  pokemonId.innerHTML = data.id
  pokemonType.innerHTML = data.types[0].type.name
  pokemonXp.innerHTML = `XP: ${data.base_experience}`
  pokemonHabilities.innerHTML = data.abilities[1].ability.name
  cardImg.src = "./assets/charmander.png"
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #F68C00 50% 100%)'
}

const renderDragonite = async (pokemon) => {
  const data = await fetchPokemon(pokemon)

  pokemonName.innerHTML = data.name
  pokemonId.innerHTML = data.id
  pokemonType.innerHTML = data.types[0].type.name
  pokemonXp.innerHTML = `XP: ${data.base_experience}`
  pokemonHabilities.innerHTML = data.abilities[1].ability.name
  cardImg.src = "./assets/dragonite.png"
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #FABE00 50% 100%)'
}

const renderGyarados = async (pokemon) => {
  const data = await fetchPokemon(pokemon)

  pokemonName.innerHTML = data.name
  pokemonId.innerHTML = data.id
  pokemonType.innerHTML = data.types[0].type.name
  pokemonXp.innerHTML = `XP: ${data.base_experience}`
  pokemonHabilities.innerHTML = data.abilities[1].ability.name
  cardImg.src = "./assets/gyarados.png"
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #3DD4FB 50% 100%)'
}

const renderPikachu = async (pokemon) => {
  const data = await fetchPokemon(pokemon)

  pokemonName.innerHTML = data.name
  pokemonId.innerHTML = data.id
  pokemonType.innerHTML = data.types[0].type.name
  pokemonXp.innerHTML = `XP: ${data.base_experience}`
  pokemonHabilities.innerHTML = data.abilities[1].ability.name
  cardImg.src = "./assets/pikachu.png"
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #FFFC22 50% 100%)'
}

btnBulbasaur.addEventListener("click", () => renderBulbasaur(1))
btnCharmander.addEventListener("click", () => renderCharmander(4))
btnDragonite.addEventListener("click", () => renderDragonite(149))
btnGyarados.addEventListener("click", () => renderGyarados(22))
btnPikachu.addEventListener("click", () => renderPikachu(25))



btnBulbasaur.addEventListener("click", function() {
  cardBack.style.display === 'none' ? cardPrincipal.style.display = 'block' : cardBack.style.display = 'none'
})


