
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

