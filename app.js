
document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let pokemonName = document.getElementById('pokemon-input').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            let pokemonHtml = `
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
                    <div class="card-body">
                        <h5 class="card-title">${data.name.toUpperCase()}</h5>
                        <p class="card-text">Type: ${data.types.map(type => type.type.name).join(', ')}</p>
                        <p class="card-text">Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
                        <p class="card-text">HP: ${data.stats[0].base_stat}</p>
                        <p class="card-text">Attack: ${data.stats[1].base_stat}</p>
                        <p class="card-text">Defense: ${data.stats[2].base_stat}</p>
                    </div>
                </div>
            `;
            document.getElementById('pokemon-data').innerHTML = pokemonHtml;
        })
        .catch(error => {
            document.getElementById('pokemon-data').innerHTML = '<p class="text-danger">Pokémon not found. Please try again.</p>';
        });
});
