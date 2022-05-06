let btn_submit = document.getElementById("send");

btn_submit.onclick = () => {
    let get_name = document.getElementById("get_name").value;
    let get_email = document.getElementById("get_email").value;
    let get_message = document.getElementById("get_message").value;
    let get_send_copy = document.getElementById("copy").value
    let dados = {"name": get_name, "email": get_email, "message": get_message, "send_copy": get_send_copy};
    let json = JSON.stringify(dados)
    console.log(json)
    alert(json);
}