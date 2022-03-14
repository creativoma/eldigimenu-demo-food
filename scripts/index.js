import {componenteInfo} from "./componentes/client.js";
import {componenteScroll} from"./componentes/scroll.js";
import {componenteInicio} from"./componentes/inicio.js";

import {componenteSlider} from"./componentes/slider.js";
import {componenteMenus} from"./componentes/menus.js";

import {componenteSandwiches} from"./componentes/sandwiches.js";
import {componenteBebidas} from"./componentes/bebidas.js";
import {componenteDesayunos} from"./componentes/desayunos.js";
import {componenteMeriendas} from"./componentes/meriendas.js";
import {componentePostres} from"./componentes/postres.js";

let mainPrincipal = document.querySelector("main").id;

"inicio" === mainPrincipal && (
    componenteInicio(),
    componenteInfo(),
    componenteSlider(),
    componenteScroll()
),

"menus" === mainPrincipal && (
    componenteMenus(),
    componenteInfo(),
    componenteScroll()
),

"sandwiches" === mainPrincipal && (
    componenteSandwiches(),
    componenteInfo(),
    componenteScroll()
),

"bebidas" === mainPrincipal && (
    componenteBebidas(),
    componenteInfo(),
    componenteScroll()
),

"desayunos" === mainPrincipal && (
    componenteDesayunos(),
    componenteInfo(),
    componenteScroll()
),

"meriendas" === mainPrincipal && (
    componenteMeriendas(),
    componenteInfo(),
    componenteScroll()
),

"postres" === mainPrincipal && (
    componentePostres(),
    componenteInfo(),
    componenteScroll()
);
