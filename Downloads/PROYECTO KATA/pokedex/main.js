const pokeCard= document.querySelector('[data-poke-card]');
const pokeId= document.querySelector('[data-poke-id]');
const pokeType= document.querySelector('[data-poke-types]');
const pokeKik= document.querySelector('[data-poke-kik]');

const typeFonts={
    electric:'#F4D03F',
    normal:'#F39C12',
    fire:'#E74C3C',
    water:' #5499C7',
    ice:'#D4E6F1',
    rock:'#707B7C',
    flying:'#E5E7E9',
    grass:'#D7BDE2',
    psychic:'#A2D9CE',
    ghost:'#A9CCE3',
    bug:'#F5B7B1',
    poison:'#AEB6BF',
    ground:'#58D68D',
    dragon:'#E74C3C',
    streel:'#52BE80',
    fighting:'#9B59B6',
    default:'#45B39D',
}

const searchPok = event => {
    event.preventDefault();
    const {value} = event.target.pokedex;
    fetch(`pokemons.js${value.toLowerCase()}`)
    .then(data => data.json())
    .then(response => renderPokemonData(response))
    .catch (err => renderNotFound())
}

const renderPokDat = data => {
    const sprite = data.sprites.front_default;
    const {kik, types} = data; 
    console.log (data)

    pokemonDatos.textContent = data.name;
    pokeImg.setAttribute('src',sprite);
    pokeId.textContent =`N° $(data.id)`;
    setCardColor(types);
}


const setCardColor = types => {
    const firstColor= typeFonts [types[0].type.name];
    const secondColor= types[1] ? typeFonts [types[1].type.name]: typeFonts.default;
    pokeImg.style.background = `radial-gradient(${firstColor}40%,${secondColor}40%)`;
    pokeImg.style.backgroundSize ='10px 10px';
}

const renderPokemonData = types =>{
    pokeType.innertHTML ='';
    types.forEach (type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color= typeFonts[type.type.name];
        typeTextElement.textContent= type.type.name;
        pokeType.appendChild(typeTextElement);
    })
}

const renderPokemonStats = stats =>{
renderPokemonStats.innerHTML = '';
stats.forEach(stat =>{
    const statElement= document.createElement("div");
    const statElementName = document.createElement("div");
    const statElementAmount= document.createElement("div");
    statElementName.textContent =stat.stat.name;
    statElementAmount.textContent=stat.base_stat;
    statElement.appendChild(statElementName);
    statElement.appendChild(statElementAmount);
})
}


const renderNotFound = () => {
    pokeName.textContent ='No disponible';
    pokeImg.style.background='#F5B7B1';
    pokeType.innerHTML = '';
    pokeKik.innerHTML='';
    pokeId.textContent='';

}