let btn_busca = document.getElementById("btn_search");
let fish_id = 972;
function search_fish(){
    fetch('https://reef-fishes.herokuapp.com/api/'+fish_id , {mode:'no-cors'})
    .then(response => response.json())
    .then(data => {
    console.log(data);

    })
    .catch((error) =>{
        console.error("Erro:",error);
    });
}

//btn_busca.onclick() => {
//    let fish_id = document.getElementById('search_peixe').value;
//    search_fish();
//}
search_fish();