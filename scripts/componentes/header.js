(()=>{
  const headerContent = document.querySelector('header');

  headerContent.innerHTML = 

  `
  <section class="header__top-logo">
  <img  id="brand-eldigimenu" src="https://eldigimenu.com/demo/food/assets/img/client-logo_2.svg" alt="eldigimenú" title="eldigimenú" />
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
        <object class="selectObj" type="image/svg+xml" data="./assets/svg/casa.svg"></object>
      </a>
    </li>
    <li id="icon-2" class="no-activo">
        <object class="selectObj" type="image/svg+xml" data="./assets/svg/menu.svg"></object>
    </li>
    <li id="icon-3" class="no-activo">
        <object class="selectObj" type="image/svg+xml" data="./assets/svg/hamburguesa.svg"></object>
    </li>
    <li id="icon-4" class="no-activo">
        <object class="selectObj" type="image/svg+xml" data="./assets/svg/bebidas.svg"></object>
    </li>
    <li id="icon-5" class="no-activo">
        <object class="selectObj" type="image/svg+xml" data="./assets/svg/taza-caliente.svg"></object>
    </li>
    <li id="icon-6" class="no-activo">
        <object class="selectObj" type="image/svg+xml" data="./assets/svg/magdalena.svg"></object>
    </li>
    <li id="icon-7" class="no-activo">
        <object class="selectObj" type="image/svg+xml" data="./assets/svg/helado.svg"></object>
    </li>
  </ol>
  </nav>
  `

  setTimeout(() => {
    const arrObjetos = document.querySelectorAll(".selectObj");

    for (let i = 0; i < arrObjetos.length; i++) {

      let contentObj = (arrObjetos[i].contentDocument).querySelector('svg');
      
      let btn1 = (arrObjetos[0].contentDocument).querySelector('svg');
      let btn2 = (arrObjetos[1].contentDocument).querySelector('svg');
      let btn3 = (arrObjetos[2].contentDocument).querySelector('svg');
      let btn4 = (arrObjetos[3].contentDocument).querySelector('svg');
      let btn5 = (arrObjetos[4].contentDocument).querySelector('svg');
      let btn6 = (arrObjetos[5].contentDocument).querySelector('svg');
      let btn7 = (arrObjetos[6].contentDocument).querySelector('svg');

      console.log(contentObj);
      contentObj.style.transition = "all ease 200ms";

      let colorActive = '#bb0c17';
      
      let elemento = document.querySelector('main').id;      
      if(elemento.includes('inicio')){
        btn1.style.fill = colorActive;  
      } else if(elemento == 'menus'){
        btn2.style.fill = colorActive;  
      } else if(elemento == 'sandwiches'){
        btn3.style.fill = colorActive; 
      } else if(elemento == 'bebidas'){
        btn4.style.fill = colorActive; 
      } else if(elemento == 'desayunos'){
        btn5.style.fill = colorActive; 
      } else if(elemento == 'meriendas'){
        btn6.style.fill = colorActive; 
      } else if(elemento == 'postres'){
        btn7.style.fill = colorActive; 
      }

      btn1.addEventListener('click', () => {
        window.location.href = "index.html";
      });
      btn2.addEventListener('click', () => {
        window.location.href = "menus.html";
      });
      btn3.addEventListener('click', () => {
        window.location.href = "sandwiches.html";
      });
      btn4.addEventListener('click', () => {
        window.location.href = "bebidas.html";
      });
      btn5.addEventListener('click', () => {
        window.location.href = "desayunos.html";
      });
      btn6.addEventListener('click', () => {
        window.location.href = "meriendas.html";
      });
      btn7.addEventListener('click', () => {
        window.location.href = "postres.html";
      });

    }
  }, 100);

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