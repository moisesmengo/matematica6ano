const alert1 = document.getElementById('alert1');
alert1.addEventListener('click', () => {
    swal({
        title: "180,00 - 176,90",
        text: "Nesse caso, precisamos transformar 1 dezena em 10 unidades e 1 unidade em 10 décimos.",
        icon: "info",
    });
});

const alert2 = document.getElementById('alert2');
alert2.addEventListener('click', () => {
    swal({
        title: "87,75 + 35,60",
        text: "Note que 7 décimos mais 6 décimos são 13 décimos. Como 10 décimos formam 1 unidade, temos que, 13 décimos correspondem a 1 unidade mais 3 décimos.",
        icon: "info",
    });
});