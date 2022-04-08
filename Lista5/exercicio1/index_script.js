document.getElementById("btn_1").onclick = function () {
    let old_text = document.getElementById('container').innerHTML;
    document.getElementById("container").innerHTML = old_text + "<p>Luiz Marcelo Pelizaro</p>";
}

