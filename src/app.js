import 'bootstrap';
import './style.css';

import './assets/img/rigo-baby.jpg';
import './assets/img/4geeks.ico';

const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon', 'pasiones', 'comsocom'];
const extensions = ['es', 'com', 'org', 'net'];

const domainHack = (palabra, extension) => {
    return palabra.endsWith(extension)
        ? `${palabra.slice(0, -extension.length)}.${extension}`
        : `${palabra}.${extension}`;
};

const generarDominios = () => {
    let listadoDominios = [];

    pronoun.map((p) => {
        adj.map((a) => {
            noun.map((n) => {
                extensions.map((e) => {
                    let palabra = `${p}${a}${n}`;
                    listadoDominios.push(domainHack(palabra, e));
                });
            });
        });
    });

    return {
        listado: listadoDominios,
        total: listadoDominios.length,
    };
};

window.onload = function () {
    //write your code here
    const listaDominios = document.getElementById('lista_dominios');
    const dominiosGenerados = document.getElementById('dominios_generados');
    const dominios = generarDominios();

    dominios.listado.map((dominio) => {
        const option = document.createElement('option');

        option.value = dominio;
        option.textContent = dominio;

        listaDominios.appendChild(option);
        console.log(dominio);
    });
    dominiosGenerados.innerHTML = `Total dominios generados: ${dominios.total}`;
};
