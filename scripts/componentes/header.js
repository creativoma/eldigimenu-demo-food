(()=>{
  const headerContent = document.querySelector('header');

  headerContent.innerHTML = 

  `
  <section class="header__top-logo">
  <a href="./index.html"><img id="brand-eldigimenu" src="./assets/svg/client-logo_2.svg" alt="Mac Ronald's" title="Mac Ronald's" /><a>
  <ol class="header-info__nav-fixed-list">
    <li id="icon-top-1" class="no-activo">
      <a href="#"><img src="./assets/svg/informacion.svg" alt="Icono Menú"/></a>
    </li>
    <li id="icon-top-2" class="no-activo">
    <a href="#"><img src="./assets/svg/ajustes.svg" alt="Icono Menú"/></a>
    </li>
  </ol>
  </section>
  <nav class="header__nav-fixed">
  <ol class="header__nav-fixed-list">
    <li id="icon-1" class="no-activo">
      <a href="./index.html">
        <img class="icon-menu" src="./assets/svg/casa.svg" alt="Inicio" title="Inicio">
      </a>
    </li>
    <li id="icon-2" class="no-activo">
      <a href="./menus.html">
        <img class="icon-menu" src="./assets/svg/menu.svg" alt="Menus" title="Menus">
      </a>
    </li>
    <li id="icon-3" class="no-activo">
      <a href="./sandwiches.html">
        <img class="icon-menu" src="./assets/svg/hamburguesa.svg" alt="Sandwiches" title="Sandwiches">
      </a>
    </li>
    <li id="icon-4" class="no-activo">
      <a href="./bebidas.html">
        <img class="icon-menu" src="./assets/svg/bebidas.svg" alt="Bebidas" title="Bebidas">
      </a>
    </li>
    <li id="icon-5" class="no-activo">
      <a href="./desayunos.html">
        <img class="icon-menu" src="./assets/svg/taza-caliente.svg" alt="Desayunos" title="Desayunos">
      </a>
    </li>
    <li id="icon-6" class="no-activo">
      <a href="./meriendas.html">
        <img class="icon-menu" src="./assets/svg/magdalena.svg" alt="Meriendas" title="Meriendas">
      </a>
    </li>
    <li id="icon-7" class="no-activo">
      <a href="./postres.html">
        <img class="icon-menu" src="./assets/svg/helado.svg" alt="Postres" title="Postres">
      </a>
    </li>
  </ol>
  </nav>
  `
  const iconosIMG = document.querySelectorAll('img.icon-menu');
  const idMain = document.querySelector('main').id;

  if(idMain === "inicio"){
    iconosIMG[0].src = "../../assets/svg/select-icon/casa.svg"
  } else if(idMain === "menus"){
    iconosIMG[1].src = "../../assets/svg/select-icon/menu.svg"
  } else if(idMain === "sandwiches"){
    iconosIMG[2].src = "../../assets/svg/select-icon/hamburguesa.svg"
  } else if(idMain === "bebidas"){
    iconosIMG[3].src = "../../assets/svg/select-icon/bebidas.svg"
  } else if(idMain === "desayunos"){
    iconosIMG[4].src = "../../assets/svg/select-icon/taza-caliente.svg"
  } else if(idMain === "meriendas"){
    iconosIMG[5].src = "../../assets/svg/select-icon/magdalena.svg"
  } else if(idMain === "postres"){
    iconosIMG[6].src = "../../assets/svg/select-icon/helado.svg"
  } 

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

const comparteWhatsApp = () => {
  window.location.href = "whatsapp://send?text=Te comparto la carta de Mac Ronald's 🍔👉🏻 https://eldigimenu.com/demo/food/"
}

const cuerpo = document.querySelector('body');  
const divContainer = document.createElement('div');
const divPopUp = document.createElement('div');

divContainer.setAttribute('class','inactive-container');
divPopUp.setAttribute('class','inactive-top');
divContainer.setAttribute('id','div-container');
divPopUp.setAttribute('id','aviso-popup');

const avisoPopUp = () => {

  cuerpo.appendChild(divContainer);
  divContainer.appendChild(divPopUp);

  divPopUp.innerHTML =`Enlace copiado, listo para compartir! 😉`

  setTimeout(() => {
    divPopUp.classList.remove ('inactive-top');
    divPopUp.classList.add('active-top');
    divContainer.classList.remove('inactive-container');
    divContainer.classList.add('active-container');

  }, 0);

  setTimeout(() => {
    divPopUp.classList.remove ('active-top');
    divPopUp.classList.add('inactive-top');
    divContainer.classList.remove('active-container');
    divContainer.classList.add('inactive-container');
    
    let modalOpen = document.querySelectorAll('.modal, .open'); 

    for (let i = 0; i < modalOpen.length; i++) {
        if(modalOpen[i].classList.contains('open')){
        modalOpen[i].classList.remove('open');
        modalOpen[i].classList.add('close');
        modalOpen[i].style.transition = "ease all 500ms";
      }
    }
  }, 4000);
}

const comparteLink = () => {
    let link = "https://eldigimenu.com/demo/beauty/";

    navigator.clipboard.writeText(link);
    avisoPopUp();
  }