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
    <a href="./menus.html"><i class="fa-solid fa-utensils"></i></a>
  </li>
  <li id="icon-3" class="no-activo">
    <a href="./sandwiches.html"><i class="fi fi-rr-hamburger"></i></a>
  </li>
  <li id="icon-4" class="no-activo">
    <a href="./bebidas.html"><i class="fi fi-rr-beer"></i></a>
  </li>
  <li id="icon-5" class="no-activo">
    <a href="./desayunos.html"><i class="fi fi-rr-mug-alt"></i></a>
  </li>
  <li id="icon-6" class="no-activo">
    <a href="./meriendas.html"><i class="fi fi-rr-cupcake"></i></a>
  </li>
  <li id="icon-7" class="no-activo">
    <a href="./postres.html"><i class="fa-solid fa-ice-cream"></i></a>
  </li>
</ol>
</nav>
`

const btnMenu = document.querySelectorAll('nav.header__nav-fixed ol li a');

const changeColorIconMenu = () => {
  let elemento = document.querySelector('main').id;
  if(elemento.includes('inicio')){
    btnMenu[0].classList.add('activo');
    btnMenu[0].classList.remove('no-activo');    
  } else if(elemento == 'menus'){
    btnMenu[1].classList.add('activo');
    btnMenu[1].classList.remove('no-activo');
  } else if(elemento == 'sandwiches'){
    btnMenu[2].classList.add('activo');
    btnMenu[2].classList.remove('no-activo');
  } else if(elemento == 'bebidas'){
    btnMenu[3].classList.add('activo');
    btnMenu[3].classList.remove('no-activo');
  } else if(elemento == 'desayunos'){
    btnMenu[4].classList.add('activo');
    btnMenu[4].classList.remove('no-activo');
  } else if(elemento == 'meriendas'){
    btnMenu[5].classList.add('activo');
    btnMenu[5].classList.remove('no-activo');
  } else if(elemento == 'postres'){
    btnMenu[6].classList.add('activo');
    btnMenu[6].classList.remove('no-activo');
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