const pokemonName = document.querySelector('.pokemon-name')
const pokemonId = document.querySelector('.pokemon-id')
const pokemonType = document.querySelector('.type')
const cardImg = document.querySelector('.card-img')
const card = document.getElementById('card-bg')
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

const renderPokemon = async (id, imagem, background) => {
  const pokemon = await fetchPokemon(id)

  pokemonName.innerHTML = pokemon.name
  pokemonId.innerHTML = pokemon.id
  pokemonType.innerHTML = pokemon.types[0].type.name
  pokemonXp.innerHTML = `XP: ${pokemon.base_experience}`
  pokemonHabilities.innerHTML = pokemon.abilities[1].ability.name
  cardImg.src = `./assets/${imagem}`
  card.setAttribute('style',`background: linear-gradient(to top,  #fff8bf 0% 50%, ${background} 50% 100%) !important`) 
}


btnBulbasaur.addEventListener("click", () => renderPokemon(1, 'bulbasaur.png', '#59bc38'))
btnCharmander.addEventListener("click", () => renderPokemon(4, 'charmander.png', ' #F68C00'))
btnDragonite.addEventListener("click", () => renderPokemon(149, 'dragonite.png', '#FABE00' ))
btnGyarados.addEventListener("click", () => renderPokemon(130, 'gyarados.png','#3DD4FB' ))
btnPikachu.addEventListener("click", () => renderPokemon(25, 'pikachu.png', '#FFFC22' ))



btnBulbasaur.addEventListener("click", () => {
  cardBack.style.display === 'none' ? cardBack.style.display = 'block' : cardBack.style.display = 'none'
  cardPrincipal.style.display === 'block' ? cardPrincipal.style.display = 'none' : cardPrincipal.style.display = 'block'
})

btnCharmander.addEventListener("click", () => {
  cardBack.style.display === 'none' ? cardBack.style.display = 'block' : cardBack.style.display = 'none'
  cardPrincipal.style.display === 'block' ? cardPrincipal.style.display = 'none' : cardPrincipal.style.display = 'block'
})

btnDragonite.addEventListener("click", () => {
  cardBack.style.display === 'none' ? cardBack.style.display = 'block' : cardBack.style.display = 'none'
  cardPrincipal.style.display === 'block' ? cardPrincipal.style.display = 'none' : cardPrincipal.style.display = 'block'
})

btnGyarados.addEventListener("click", () => {
  cardBack.style.display === 'none' ? cardBack.style.display = 'block' : cardBack.style.display = 'none'
  cardPrincipal.style.display === 'block' ? cardPrincipal.style.display = 'none' : cardPrincipal.style.display = 'block'
})

btnPikachu.addEventListener("click", () => {
  cardBack.style.display === 'none' ? cardBack.style.display = 'block' : cardBack.style.display = 'none'
  cardPrincipal.style.display === 'block' ? cardPrincipal.style.display = 'none' : cardPrincipal.style.display = 'block'
})




