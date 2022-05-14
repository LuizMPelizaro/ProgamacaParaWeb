let btn_busca = document.getElementById("btn_search");
let id_value = 0;
const api_link = "https://reef-fishes.herokuapp.com/api/";

function value_fish(fish) {
    if (fish === "not_targeted") {
        return "Unknow";
    } else if (fish === "low") {
        return "$";
    } else if (fish === "medium") {
        return "$$";
    } else if (fish === "high") {
        return "$$$";
    } else if (fish === "very high") {
        return "$$$$";
    }
}

function search_fish(id_fish) {
    const div_container = document.querySelector('#container')
    const div_card_fish = document.querySelector('#fish')
    fetch(api_link + id_fish)
        .then(response => response.json())
        .then(data => {
            data["fish"].forEach(element => {
                let div = document.createElement('div');
                let img = document.createElement('img');
                let name = document.createElement('p');
                let price = document.createElement('p');

                let name_fish = element.Name
                let fish_price = value_fish(element.Price_category)

                div.setAttribute("id", `card_fish_${id_value}`);

                img.setAttribute("id", `img_fish_${id_value}`);
                img.setAttribute("src", `${element.Img}`);

                name.setAttribute("class", "fish_name");

                price.setAttribute("class", "fish_value");

                name.appendChild(document.createTextNode(name_fish));
                price.appendChild(document.createTextNode(fish_price));

                div.appendChild(img);
                div.appendChild(name);
                div.appendChild(price);
                div_card_fish.appendChild(div);
                div_container.appendChild(div_card_fish);
                id_value++
            })
        })
        .catch((error) => {
            console.error("Erro:", error);
        });
}

btn_busca.onclick = () => {
    let id_fish = document.getElementById("search_fish").value;
    if (!id_fish) {
        alert("ERRO INSIRA UM Fb_Code , GÊNERO OU GENERO/ESPÉCIE DE PEIXE");
    }
    search_fish(id_fish);
}
