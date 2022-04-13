const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/`
document.querySelector('#search-btn').addEventListener('click',findPokemon)

function findPokemon(){
    let pokemon = document.querySelector('#name-input').value.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
     .then(res => res.json())
     .then(data => {
         console.log(data)
         let imgUrl = data.sprites.front_default
         let height = data.height
         let weight = data.weight

         document.querySelector('#main-screen').style.backgroundImage = `url(${imgUrl})`
         document.querySelector('#name-screen').innerText = data.species.name
         document.querySelector('#about-screen').innerText = `Height: ${height}cm Weight: ${weight}Kg`
         document.querySelector('#type-screen').innerText = data.types[0].type.name
         document.querySelector('#id-screen').innerText = data.game_indices[18].game_index
     })
    }
