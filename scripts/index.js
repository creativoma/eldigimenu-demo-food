import { componenteInfo } from "./componentes/client.js";
import { componenteScroll } from "./componentes/scroll.js";

import { componenteInicio } from "./componentes/inicio.js";
import { componenteSlider } from "./componentes/slider.js";

import { componenteComida } from "./componentes/comida.js";
import { componenteCombo } from "./componentes/combo.js";
import { componenteBebida } from "./componentes/bebida.js";
import { componenteDesayuno } from "./componentes/desayuno.js";
import { componentePostre } from "./componentes/postre.js";

let mainPrincipal = document.querySelector('main').id;
console.log('Main del momento:', mainPrincipal);

if (mainPrincipal === 'inicio'){
    componenteInicio();
    componenteInfo();
    componenteSlider();
    componenteScroll();
}

if (mainPrincipal === 'combo'){
    componenteCombo();
    componenteInfo();
    componenteScroll();
}

if (mainPrincipal === 'comida'){
    componenteComida();
    componenteInfo();
    componenteScroll();
}

if (mainPrincipal === 'bebida'){
    componenteBebida();
    componenteInfo();
    componenteScroll();
}

if (mainPrincipal === 'desayuno'){
    componenteDesayuno();
    componenteInfo();
    componenteScroll();
}

if (mainPrincipal === 'postre'){
    componentePostre();
    componenteInfo();
    componenteScroll();
}