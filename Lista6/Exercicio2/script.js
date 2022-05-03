let btn_add = document.getElementById("create_text");
let list = document.getElementById("list_ul");

btn_add.addEventListener('click', () => {
    let get_text = document.getElementById("text").value;
    let text = `<li>${get_text}</li>`;
    if (get_text === "") {
        alert("Texto invalido");
    } else {
        list.innerHTML += text;
        document.getElementById("text").value = "";
    }
})