const planRomantico = { 
    titulo: "Plan Romántico", 
    fechainicio:"10/10/2001", 
    fechafin:"10/10/2023" 
};
const planLunaDeMiel = {
    titulo: "Plan Luna de Miel", 
    fechainicio:"10/10/2001", 
    fechafin:"10/10/2023"
}
const planAventura = { 
    titulo: "Plan Aventura", 
    fechainicio:"10/10/2001", 
    fechafin:"10/10/2023" 
};
const planSpa = {
    titulo: "Plan Spa", 
    fechainicio:"10/10/2001", 
    fechafin:"10/10/2023"
}

const listaPlanes = [planRomantico,planLunaDeMiel,planAventura,planSpa];

var counter = 0;

$(document).ready(function () {       
        listaPlanes.map(function (plan) {
            document.getElementById(counter).innerHTML = plan.titulo;
            counter++;
        });
}); 