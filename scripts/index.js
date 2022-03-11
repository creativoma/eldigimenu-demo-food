import { componenteInfo } from "./componentes/client.js";
import { componenteScroll } from "./componentes/scroll.js";

import { componenteInicio } from "./componentes/inicio.js";
import { componenteSlider } from "./componentes/slider.js";

import { componenteMenus } from "./componentes/menus.js";
import { componenteSandwiches } from "./componentes/sandwiches.js";
import { componenteBebidas } from "./componentes/bebidas.js";
import { componenteDesayunos } from "./componentes/desayunos.js";
import { componenteMeriendas } from "./componentes/meriendas.js";
import { componentePostres } from "./componentes/postres.js";

let mainPrincipal = document.querySelector('main').id;
console.log('Main del momento:', mainPrincipal);

if (mainPrincipal === 'inicio'){
    componenteInicio();
    componenteInfo();
    componenteSlider();
    componenteScroll();
}

if (mainPrincipal === 'menus'){
    componenteMenus();
    componenteInfo();
    componenteScroll();
}

if (mainPrincipal === 'sandwiches'){
    componenteSandwiches();
    componenteInfo();
    componenteScroll();
}

if (mainPrincipal === 'bebidas'){
    componenteBebidas();
    componenteInfo();
    componenteScroll();
}

if (mainPrincipal === 'desayunos'){
    componenteDesayunos();
    componenteInfo();
    componenteScroll();
}

if (mainPrincipal === 'meriendas'){
    componenteMeriendas();
    componenteInfo();
    componenteScroll();
}

if (mainPrincipal === 'postres'){
    componentePostres();
    componenteInfo();
    componenteScroll();
}