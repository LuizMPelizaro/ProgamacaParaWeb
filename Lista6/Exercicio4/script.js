let list = document.getElementById("check_number");
let value_number = Math.floor(Math.random() * 101) + 1;
let btn_check = document.getElementById("btn_check");

btn_check.onclick = () => {
    let get_text = document.getElementById("text").value;
    let number = parseInt(get_text);
    let text = `<li>${get_text}</li>`;
    if (number === value_number) {
        text = `<li>${get_text} é o número certo!!</li>`;
        list.innerHTML += text;
        document.getElementById("text").value = "";
    } else if (number > 100 || number < 1) {
        alert("Numero invalido !!");
        document.getElementById("text").value = "";
    } else if (number > value_number) {
        text = `<li>${get_text} é muito maior!!</li>`;
        list.innerHTML += text;
        document.getElementById("text").value = "";
    } else if (number < value_number) {
        text = `<li>${get_text} é muito menor </li>`;
        list.innerHTML += text;
        document.getElementById("text").value = "";
    }
}