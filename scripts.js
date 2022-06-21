const card = document.querySelector('.card')
const titlePrimary = document.querySelector('.title-primary')
const titleSecondary = document.querySelector('.title-secondary')
const cardImg = document.querySelector('.card-img')
const xp = document.querySelector('.xp')
const attack = document.querySelector('.attack')
const defense = document.querySelector('.defense')
const speed = document.querySelector('.speed')
const habilities = document.querySelector('.habilities')



const insertValues = async () => {
  let values = await fetch("https://pokeapi.co/api/v2/pokemon/").then(function (pokemons) {
    return pokemons.json()
  })

}

bulbasaurChoose = () => {
  titlePrimary.innerHTML = 'Bulbasaur'
  titleSecondary.innerHTML = 'Planta'
  cardImg.src = "./assets/bulbasaur.png"
  xp.innerHTML = 'XP: 000'
  attack.innerHTML = 'Ataque: 000'
  defense.innerHTML = 'Defesa: 000'
  speed.innerHTML = 'Velocidade: 000'
  habilities.innerHTML = 'Venenoso'
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #59BC38 50% 100%)'
}

charmanderChoose = () => {
  titlePrimary.innerHTML = 'Charmander'
  titleSecondary.innerHTML = 'Fogo'
  cardImg.src = "./assets/charmander.png"
  xp.innerHTML = 'XP: 111'
  attack.innerHTML = 'Ataque: 111'
  defense.innerHTML = 'Defesa: 111'
  speed.innerHTML = 'Velocidade: 111'
  habilities.innerHTML = 'Chama'
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #F68C00 50% 100%)'
}

dragoniteChoose = () => {
  titlePrimary.innerHTML = 'Dragonite'
  titleSecondary.innerHTML = 'Dragão'
  cardImg.src = "./assets/dragonite.png"
  xp.innerHTML = 'XP: 222'
  attack.innerHTML = 'Ataque: 222'
  defense.innerHTML = 'Defesa: 222'
  speed.innerHTML = 'Velocidade: 222'
  habilities.innerHTML = 'Hipnose'
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #FABE00 50% 100%)'
}

gengarChoose = () => {
  titlePrimary.innerHTML = 'Gengar'
  titleSecondary.innerHTML = 'Fantasma'
  cardImg.src = "./assets/gengar.png"
  xp.innerHTML = 'XP: 333'
  attack.innerHTML = 'Ataque: 333'
  defense.innerHTML = 'Defesa: 333'
  speed.innerHTML = 'Velocidade: 333'
  habilities.innerHTML = 'Venenoso'
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #A28CDE 50% 100%)'
}

gyaradosChoose = () => {
  titlePrimary.innerHTML = 'Gyarados'
  titleSecondary.innerHTML = 'Água'
  cardImg.src = "./assets/gyarados.png"
  xp.innerHTML = 'XP: 444'
  attack.innerHTML = 'Ataque: 444'
  defense.innerHTML = 'Defesa: 444'
  speed.innerHTML = 'Velocidade: 444'
  habilities.innerHTML = 'Intimidação'
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #3DD4FB 50% 100%)'
}

pikachuChoose = () => {
  titlePrimary.innerHTML = 'Pikachu'
  titleSecondary.innerHTML = 'Elétrico'
  cardImg.src = "./assets/pikachu.png"
  xp.innerHTML = 'XP: 555'
  attack.innerHTML = 'Ataque: 555'
  defense.innerHTML = 'Defesa: 555'
  speed.innerHTML = 'Velocidade: 555'
  habilities.innerHTML = 'Ataque Rápido'
  card.style.background = 'linear-gradient(to top, #fff8bf 0% 50%, #FFFC22 50% 100%)'
}


