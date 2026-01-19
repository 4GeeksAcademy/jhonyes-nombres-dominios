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

window.onload = function () {
    //write your code here
    const listaDominios = document.getElementById('lista_dominios');

    pronoun.map((p) => {
        adj.map((a) => {
            noun.map((n) => {
                extensions.map((e) => {
                    const option = document.createElement('option');
                    let palabra = `${p}${a}${n}`;

                    option.value = domainHack(palabra, e);
                    option.textContent = option.value;
                    listaDominios.appendChild(option);

                    console.log(domainHack(palabra, e));
                });
            });
        });
    });
};
