const http_request = "https://pokeapi.co/api/v2/pokemon/";
let randpoke;
const array_card_player = [];
const array_poke_gen = [];
let pokemons = 151;
const img = document.createElement('img');
const TIME = 5000;
let raffle_timer;
let start = false;

const btn_start = document.getElementById('btn_start');
const btn_bingo = document.getElementById('check_player_one');

const rand_poke = () => Math.floor(Math.random() * pokemons) + 1;

function generate_card(i) {
    const card_poke_player = document.querySelector('#card_poke_player');
    fetch(http_request + randpoke)
        .then(response => response.json())
        .then(data => {
            let div = document.createElement('div');
            let img = document.createElement('img');
            div.setAttribute("id", `${i}`);
            div.addEventListener("click", () => {
                div.classList.toggle("poke_card");
            })
            img.setAttribute("src", `${data.sprites.front_default}`);
            div.appendChild(img);
            card_poke_player.appendChild(div);
        })
}

function rand_card_generator() {
    const card_poke = document.querySelector('#poke');
    fetch(http_request + rand_poke())
        .then(response => response.json())
        .then(data => {
            let div = document.createElement('div');
            if (img.src === "") {
                img.setAttribute("src", `${data.sprites.front_default}`);
                div.appendChild(img);
                card_poke.appendChild(div);
            }
            img.setAttribute("src", `${data.sprites.front_default}`);
        })
}


function generate_cards() {
    for (let i = 0; i < 16; i++) {
        randpoke = rand_poke();
        while (array_card_player.includes(randpoke) === true) {
            randpoke = rand_poke();
        }
        generate_card(i);
        array_card_player[i] = randpoke;
    }
}

function raffle_poke() {
    if (pokemons === 0) {
        clearInterval(raffle_timer);
    }
    randpoke = rand_poke();
    while (array_poke_gen.includes(randpoke) === true) {
        randpoke = rand_poke();
    }
    rand_card_generator()
    array_poke_gen.push(randpoke);
    pokemons--;
}


function bingo() {
    for (let i = 0; i < 9; i++) {
        if (array_poke_gen.indexOf(array_card_player[i], 0) === -1) {
            alert("Você nao bingou");
            return -1;
        }
    }
    alert("Voce bingou !!!");
}


btn_bingo.addEventListener("click", bingo);
btn_start.onclick = () => {
    if (start === false) {
        generate_cards();
        raffle_timer = setInterval(raffle_poke, TIME);
    }
    start = true;
}