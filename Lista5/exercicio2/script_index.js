document.getElementById("bnt_1").onclick = () => {
    let text_one = document.getElementById("text_1").innerHTML;
    document.getElementById("text_1").innerHTML = document.getElementById("text_2").innerHTML;
    document.getElementById("text_2").innerHTML = text_one;
}
