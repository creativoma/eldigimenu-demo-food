export const construirModales = (API) =>{

  async function fetchDataJSON() {
      const response = await fetch(API);
      const data = await response.text();
      const corteRespuesta = data.slice(47, -2);
      const respuestaJSON = JSON.parse(corteRespuesta);
      const items = respuestaJSON.table.rows;
      return items;
    }
  
  fetchDataJSON().then(items => {

    for (let i = 0; i < items.length; i++) {
      let nombre = items[i].c[0].v;
      let desCorta = items[i].c[1].v;
      let precio = items[i].c[3].v;
      let imagen = items[i].c[4].v;
      
      let cardItems = document.createElement('div');
      cardItems.classList = "card";
      let modalCerrado = document.createElement('div'); 
      modalCerrado.classList = "modal close";

      let containerCard = document.querySelector(`.container-card`);
      let header = document.querySelector('header');

      if(containerCard){
        header.appendChild(modalCerrado);
        containerCard.appendChild(cardItems).innerHTML = 
        `
        <div class="container-img">
        <img src="${imagen}" title="${nombre}" alt="${nombre}" loading="lazy"/>
        </div>
        <div class="container-data">
          <div class="title-card">
            <h2>${nombre}</h2>
            <p>${desCorta}</p>
          </div>
          <div class="price-card">
            <h2>${precio} <span>€</span></h2>
            <button id="btn-${i}" class="btn-item">i</button>
          </div>
        </div>
        `
      }
    }

    const botones = document.querySelectorAll('.btn-item');
    const modales = document.querySelectorAll('.modal');
    
    for (let i = 0; i < items.length; i++) {

      let nombre = items[i].c[0].v;
      let desLarga = items[i].c[2].v;

      botones[i].addEventListener("click", async e =>{
        const elementoDOM = e.target.id;
          if(elementoDOM == `btn-${[i]}`){
            if(modales[i].classList.contains('close')){
              modales[i].innerHTML = `<h2 class="data-principal__title">${nombre}</h2> <p>${desLarga}</p> <button id="btn-${i}" class="btn-modal" onclick="cerrarModales()">Cerrar</button>`;
              modales[i].classList.remove('close');
              modales[i].classList.add('open');
            }
          }
      });
    }    
  });
}