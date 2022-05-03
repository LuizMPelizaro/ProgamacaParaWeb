let table = document.getElementById("table")
let add_task = document.getElementById("add");
let delete_task
let sublime_task

add_task.onclick = () => {
    let get_text = document.getElementById("add_task").value;
    let lineTable = document.getElementsByClassName("line");
    let value = lineTable.length;
    let text = `<tr class="line">
                    <td>
                        <span>
                            <i class="fa-solid fa-check" id ="check" onclick="sublime_task(this)"></i>
                             <span>${get_text}</span>
                            <i class="fa-solid fa-trash-can" id = "delete" onclick="delete_task(this)"></i>
                        </span>
                    </td>
                </tr>`;
    console.log(table)

    if (get_text === "") {
        alert("Texto invalido");
        console.log(table)
    } else {
        table.innerHTML += text;
        for (let line of lineTable) {
            if (value % 2 === 0) {
                line.style.backgroundColor = "white";
            } else {
                line.style.backgroundColor = "gray";
            }
            value++;
        }
    }
}

delete_task = (e) => {
    e.parentElement.parentElement.parentElement.remove();
}

sublime_task = (e) => {
    let sublimed = e.nextElementSibling.style.textDecoration;
    if(sublimed === "line-through")
        e.nextElementSibling.style.textDecoration = "none"
    else
        e.nextElementSibling.style.textDecoration = "line-through"
}