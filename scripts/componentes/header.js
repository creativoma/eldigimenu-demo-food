(()=>{
const headerContent = document.querySelector('header');

headerContent.innerHTML = 

// Usar en caso de que no tenga logo
// <p><i class="fas fa-hamburger"></i>Mac Ronald's</p>

`
<section class="header__top-logo">
<img  id="brand-eldigimenu" src="../../assets/img/client-logo_2.svg" alt="eldigimenú" title="eldigimenú" />
<ol class="header-info__nav-fixed-list">
  <li id="icon-top-1" class="no-activo">
    <a href="#"><i class="far fa-question-circle"></i></a>
  </li>
  <li id="icon-top-2" class="no-activo">
    <a href="#"><i class="fas fa-cog"></i></a>
  </li>
</ol>
</section>
<nav class="header__nav-fixed">
<ol class="header__nav-fixed-list">
  <li id="icon-1" class="no-activo">
    <a href="./index.html"><i class="fi fi-rr-home"></i></a>
  </li>
  <li id="icon-2" class="no-activo">
    <a href="./combos.html"><i class="fa-solid fa-utensils"></i></a>
  </li>
  <li id="icon-3" class="no-activo">
    <a href="./comida.html"><i class="fi fi-rr-hamburger"></i></a>
  </li>
  <li id="icon-4" class="no-activo">
    <a href="./bebida.html"><i class="fi fi-rr-beer"></i></a>
  </li>
  <li id="icon-5" class="no-activo">
    <a href="./desayuno.html"><i class="fi fi-rr-mug-alt"></i></a>
  </li>
  <li id="icon-6" class="no-activo">
    <a href="./postre.html"><i class="fi fi-rr-cupcake"></i></a>
  </li>
</ol>
</nav>
`

const btnMenu = document.querySelectorAll('nav.header__nav-fixed ol li a');

const changeColorIconMenu = () => {
  let elemento = document.title;
  if(elemento.includes('Inicio')){
    btnMenu[0].classList.add('activo');
    btnMenu[0].classList.remove('no-activo');    
  } else if(elemento == 'Combos'){
    btnMenu[1].classList.add('activo');
    btnMenu[1].classList.remove('no-activo');
  } else if(elemento == 'Comida'){
    btnMenu[2].classList.add('activo');
    btnMenu[2].classList.remove('no-activo');
  } else if(elemento == 'Bebidas'){
    btnMenu[3].classList.add('activo');
    btnMenu[3].classList.remove('no-activo');
  } else if(elemento == 'Desayunos y Meriendas'){
    btnMenu[4].classList.add('activo');
    btnMenu[4].classList.remove('no-activo');
  } else if(elemento == 'Postres'){
    btnMenu[5].classList.add('activo');
    btnMenu[5].classList.remove('no-activo');
  }
}

changeColorIconMenu();
})();

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const cerrarModales = () =>{

  let modalOpen = document.querySelectorAll('.modal, .open'); 
  for (let i = 0; i < modalOpen.length; i++) {
      if(modalOpen[i].classList.contains('open')){
      modalOpen[i].classList.remove('open');
      modalOpen[i].classList.add('close');
    }
  } 
}