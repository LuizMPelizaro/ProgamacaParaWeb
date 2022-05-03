let btn_div_1 = document.getElementById("active_div_1");
let btn_div_2 = document.getElementById("active_div_2");
let btn_div_3 = document.getElementById("active_div_3");
let btn_div_4 = document.getElementById("active_div_4");

btn_div_1.onclick = () => {
    let display = document.getElementById('div1').style.display;
    if (display === "none") {
        document.getElementById("div1").style.display = 'block';
    } else {
        document.getElementById("div1").style.display = 'none';
    }
}
btn_div_2.onclick = () => {
    let display = document.getElementById('div2').style.display;
    if (display === "none") {
        document.getElementById("div2").style.display = 'block';
    } else {
        document.getElementById("div2").style.display = 'none';
    }
}
btn_div_3.onclick = () => {
    let display = document.getElementById('div3').style.display;
    if (display === "none") {
        document.getElementById("div3").style.display = 'block';
    } else {
        document.getElementById("div3").style.display = 'none';
    }
}
btn_div_4.onclick = () => {
    let display = document.getElementById('div4').style.display;
    if (display === "none") {
        document.getElementById("div4").style.display = 'block';
    } else {
        document.getElementById("div4").style.display = 'none';
    }
}
