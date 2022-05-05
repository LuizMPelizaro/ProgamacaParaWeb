let text_logo = document.getElementById("text_logo");
let text_company = document.getElementById("text_company");
let img_person = document.getElementById("image");
let btn_logo = document.getElementById("btn_logo");
let btn_nome = document.getElementById("btn_name");
let btn_image_person = document.getElementById("btn_img_person");
let btn_company_name = document.getElementById("btn_text_company");
let btn_employ_role = document.getElementById("change_employee_role");
let head = document.getElementById("head");
let company_name = document.getElementById("text_company")
let image_person_id = document.getElementById("image_personge")
let name = document.getElementById("text_name")
let role = document.getElementById("employee_role")

//Muda a logo do cracha
btn_logo.onclick = () => {
    //!!!!!!!MODO DE ADICIONAR UMA IMAGEM AO SITE!!!!!!!
    let img = document.getElementById("logo_change");
    const url = URL.createObjectURL(img.files[0]);
    if (!url) {
        alert("ERRO insira uma imagem");
    } else {
        let img_logo = `<img src="${url}" id = "img_logo">`
        head.innerHTML += img_logo;
        document.getElementById("logo_span").style.display = 'none';
    }
}
text_logo.onclick = () => {
    document.getElementById("logo_span").style.display = 'block';
    document.getElementById("text_logo").style.display = 'none';
    let display_span = document.getElementById("logo_span").style.display;
    if (display_span === "block") {
    }
}
//Muda o nome da companhia
btn_company_name.onclick = () => {
    let get_company_name = document.getElementById("name_company_change").value;
    let company_name_code = `<p>${get_company_name}</p>`
    if (get_company_name === "") {
        alert("Insira um nome valido");
    } else {
        company_name.innerHTML = company_name_code
        document.getElementById("text_company").style.display = 'block';
        document.getElementById("company_span").style.display = 'none';
    }
}

text_company.onclick = () => {
    document.getElementById("text_company").style.display = 'none';
    document.getElementById("company_span").style.display = 'block';
}

//Muda imagem da pessoa
btn_image_person.onclick = () => {
    let img = document.getElementById("change_image");
    const url = URL.createObjectURL(img.files[0]);
    if (!url) {
        alert("ERRO insira uma imagem");
    } else {
        let img_person = `<img src="${url}" id = "image">`
        image_person_id.innerHTML = img_person;
        document.getElementById("image").style.display = 'block'
        document.getElementById("image_person_span").style.display = 'none';
    }
}
img_person.onclick = () => {
    document.getElementById("image_person_span").style.display = 'block';
    document.getElementById("image").style.display = 'none';
}

//muda o nome da pessoa
btn_nome.onclick = () => {
    let get_name = document.getElementById("name_change").value;
    let name_code = `<p id ="text_company">${get_name}</p>`
    if (get_name === "") {
        alert("Insira um nome valido");
    } else {
        name.innerHTML = name_code
        document.getElementById("name_span").style.display = 'none';
        document.getElementById("text_name").style.display = 'block';
    }
}

name.onclick = () => {
    document.getElementById("text_name").style.display = 'none';
    document.getElementById("name_span").style.display = 'block';
}

//Muda a função na companhia

btn_employ_role.onclick = () => {
    let get_role = document.getElementById("change_employee_role").value;
    let role_code = `<p id ="text_role">${get_role}</p>`
    if (role_code === "") {
        alert("Insira um nome valido");
    } else {
        role.innerHTML = role_code;
        document.getElementById("employee_role").style.display ='block';
        document.getElementById("role_span").style.display ='none';
    }
}

role.onclick = () => {
    document.getElementById("text_role").style.display = 'none';
    document.getElementById("role_span").style.display = 'block';
}