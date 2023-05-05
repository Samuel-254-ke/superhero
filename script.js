//https://superheroapi.com/api/access-token
//https://superheroapi.com/api/access-token/search/name

const superHeroToken = 761251102043339
const Baseurl = `https://superheroapi.com/api.php/${superHeroToken}`

const newheroBtn = document.getElementById("heroBtn")
const heroImageDiv = document.getElementById('heroImage')
const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')

const getSuperHero = (id,name) =>{
    fetch(`${Baseurl}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        const powerstat = `<p> 🧠 Intelligence:${json.powerstats.intelligence}`
        const heroName = `<h2>${json.name}</h2>`
        heroImageDiv.innerHTML = `${heroName} <img src="${json.image.url}" height=300 width=300/> ${powerstat}`
    })
}

const getSearchedSuperHero = (name) => {
    fetch(`${Baseurl}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        console.log(hero)
        const heroNAme = `<h2>${json.name}</h2>` 
        heroImageDiv.innerHTML = ` ${heroNAme}<img src="${hero.image.url}" height=300 width=300/>`
        })
}


const randomHero = () =>{
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) +1 
}
newheroBtn.onclick = () => getSuperHero(randomHero())
searchBtn.onclick = () => getSearchedSuperHero(searchInput.value)

