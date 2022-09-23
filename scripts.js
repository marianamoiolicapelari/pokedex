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



function bulba(){
  renderBulbasaur(1)
}

btnBulbasaur.addEventListener("click", bulba)



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

btnPikachu.addEventListener("click", () => renderPikachu(25))


// btnBulbasaur.addEventListener("click", renderBulbasaur (1) {
//   cardBack.style.display === 'none' ? cardPrincipal.style.display = 'block' : cardBack.style.display = 'none'
// })


/*
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #3DD4FB 50% 100%)
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #FFFC22 50% 100%)
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #A28CDE 50% 100%)
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #FABE00 50% 100%)
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #F68C00 50% 100%)
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #59BC38 50% 100%)
*/
