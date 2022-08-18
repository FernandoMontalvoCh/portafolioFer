function seleccionar(link){
    var opciones = document.querySelectorAll("#link a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className = "";
}

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

window.onscroll = function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("Adaptabilidad").classList.add("bar-progress1");
        document.getElementById("Trabajo en equipo").classList.add("bar-progress2");
        document.getElementById("Aprendizaje").classList.add("bar-progress3");
        document.getElementById("Compromiso").classList.add("bar-progress4");
    }
}

var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
    let id = check.checked;
    if(id == true){
        location.href = "es/index.html";
    } else  {
        location.href = "../index.html";
    }
}