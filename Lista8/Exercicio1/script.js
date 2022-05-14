let poke_id = 1;

document.getElementById("btn_back").addEventListener("click", early_pokemon);
document.getElementById("btn_next").addEventListener("click", next_pokemon);

function next_pokemon(){
    poke_id++;
    loadpokemon();
}
function early_pokemon(){
    if(poke_id === 1){
        alert("Erro");
    }else{
    poke_id--;
    loadpokemon();
    }
}

function loadpokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + poke_id)
        .then(response => response.json())
        .then(data => {
            //O que vamos fazer com os dados
            console.log('Success:', data);
            console.table(data);
            document.getElementById("numero").innerHTML = data.id;
            let nome = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            alert(nome)
            document.getElementById("nome").innerHTML = nome;
            document.getElementById("pic").setAttribute("src", data.sprites.front_default);
            let tipos = '';
            data.types.forEach(function(item, index){
                tipos += item.type.name + ", ";
            });
            document.getElementById("type").innerHTML = tipos.slice(0, -2);
        })
        .catch((error) => {
            //Verificar os erros
            console.error('Error:', error);
        });
}



loadpokemon();