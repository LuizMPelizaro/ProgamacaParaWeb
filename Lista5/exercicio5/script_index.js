document.getElementById("btn_change_text").onclick = () => {
    document.getElementById("text").innerText = document.getElementById("text_box").value;
}

document.getElementById("color").onchange = () => {
    document.getElementById("container").style.backgroundColor = document.getElementById("color").value;
}