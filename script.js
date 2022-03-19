    var quantidade = document.getElementById('quantidade');
    quantidade.addEventListener('keyup',() =>{
        capturados(quantidade.value);
    })
    capturados(2);

function capturados(quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+ quantidade)
    .then(Response => Response.json())
    .then(allPokemon => {


        var pokemons = [];

        allPokemon.results.map((val) => {


            fetch(val.url)
                .then(Response => Response.json())
                .then(pokemonSingle => {
                    pokemons.push({ nome: val.name, imagem: pokemonSingle.sprites.front_default });

                    if (pokemons.length == quantidade) {
                        //finalizando requisição

                        var pokemonBoxes = document.querySelector('.pokemon-box')
                        pokemonBoxes.innerHTML = "";
                        //console.log(pokemons);
                        pokemons.map(function (val) {
                            pokemonBoxes.innerHTML += `
                            <div class="pokemon">
                                <img src="`+val.imagem+`">
                                <p>`+val.nome+`</p>
                            </div> `
                        })
                    }
                })
            pokemons.map((val) => {
                console.log(val.nome)
            })


        })
    })
    
}
