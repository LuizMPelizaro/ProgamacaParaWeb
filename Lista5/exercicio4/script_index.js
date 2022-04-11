document.getElementById("zebra_on").onclick = () => {
    let lineTable = document.getElementsByClassName("line");
    let value = lineTable.length;
    for (let line of lineTable) {
        // console.log(item);
        if (value % 2 === 0) {
            line.style.backgroundColor = "gray";
        }
        value++;
    }
}

document.getElementById('zebra_off').onclick = () => {
    let lineTable = document.getElementsByClassName("line");
    let value = lineTable.length;
    for (let line of lineTable) {
        if (value % 2 === 0) {
            line.style.backgroundColor = "white";
        }
        value++;
    }
}