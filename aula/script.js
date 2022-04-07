window.onload = () => {//Ao clicar no botao muda a cor da div
document.getElementById("btn1").onclick = function () {
    document.getElementById("Container").style.backgroundColor = "#d4aff0"
}
//Ao clicar no botão troca o conteudo da div id="container"
document.getElementById("btn2").onmouseover = () => {
    document.getElementById("Container").innerHTML = "<p>Josnei Pai de Santo</p>";
}

document.getElementById("btn2").onmouseout = () => {
    document.getElementById("Container").innerHTML = "<p>Ciencias da computação</p>";
}

//Adicionar uma frase a div container
document.getElementById("btn3").ondblclick = () => {
    let textoAntigo = document.getElementById("Container").innerHTML;
    document.getElementById("Container").innerHTML = textoAntigo + "<p> Show do Ednaldo Pereira</p>";
}

//Ao clicar no botão troca o visual da class item
document.getElementById("btn4").onclick = () => {
    let pcolaction = document.getElementsByClassName("item");
    for (let item of pcolaction){
        item.style.backgroundColor = "white";
    }
}

//Ao clicar no btn 5 troca a cor do H1

document.getElementById("btn5").addEventListener("click", () =>{
    document.getElementById("heading_1").style.color = "pink";
});}