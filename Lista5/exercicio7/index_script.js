var nome = ["Luiz", "Pelizaro", "Josnei", "Santo", "Chalim", "Ednaldo", "Pereira", "Edevair", "Biel", "Antedguemon"]

document.getElementById('add_line').onclick = () => {
    let table_html = document.querySelector('table')
    let lineTable = document.getElementsByClassName("line");
    let value = lineTable.length;
    let name_number = Math.floor(Math.random() * nome.length);
    let name = nome[name_number];
    let number_rand = Math.floor(Math.random() * 99);
    let table = `
    <tr class="line">
      <td>${number_rand}</td>
      <td>${name}</td>
    </tr>  `;

    for (let line of lineTable) {
        if (value % 2 === 0) {
            line.style.backgroundColor = "white";
        } else {
            line.style.backgroundColor = "gray";
        }
        value++;
    }
    table_html.innerHTML += table
}

document.getElementById('remove_line').onclick = () => {
    let rowsTable = document.getElementsByClassName("line");
    let value = rowsTable.length
    console.log(value)
    if (value > 0) {
        document.getElementById("mytab").deleteRow(value)
    }
}