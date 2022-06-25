
const alert2 = document.getElementById('alert-massa');
if (alert2) {
    alert2.addEventListener('click', () => {
        swal({
            title: "Massa",
            text: "é a quantidade de matéria que um corpo apresenta.",
            icon: "info",
        });
    });
}


const alert3 = document.getElementById('alert-submutiplos');
if (alert3) {
    alert3.addEventListener('click', () => {
        swal({
            title: "Submúltiplos.",
            text: "decímetro cúbico (dm³), centímetro cúbico (cm³),  milímetro cúbico (mm³)",
            icon: "info",
        });
    });
}

const alert4 = document.getElementById('alert-mutiplos');
if (alert4) {

    alert4.addEventListener('click', () => {
        swal({
            title: "Múltiplos.",
            text: "quilômetro cúbico (km³), hectômetro cúbico (hm³),  decâmetro cúbico (dam³)",
            icon: "info",
        });
    });
}

const alert5 = document.getElementById('alert-perimetro');
if (alert5) {

    alert5.addEventListener('click', () => {
        swal({
            title: "Perímetro.",
            text: "Perímetro de um polígono é igual à soma das medidas dos comprimentos dos seus lados",
            icon: "info",
        });
    });
}

const alert6 = document.getElementById('alert-atencao');
if (alert6) {

    alert6.addEventListener('click', () => {
        swal({
            title: "Perímetro.",
            text: "Medimos a altura de um triângulo qualquer por meio de um segmento de reta com origem em um dos vértices e perpendicular (forma um ângulo de 90º) ao lado oposto.",
            icon: "warning",
        });
    });
}