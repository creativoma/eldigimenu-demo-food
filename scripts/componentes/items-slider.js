export const construirSlider = (API) =>{

  async function fetchDataJSON() {
      const response = await fetch(API);
      const data = await response.text();
      const corteRespuesta = data.slice(47, -2);
      const respuestaJSON = JSON.parse(corteRespuesta);
      const items = respuestaJSON.table.rows;
      return items;
  }

  fetchDataJSON().then(items => {
    
    for (let i = 1; i < items.length; i++) {
      let nombre = items[i].c[0].v;
      let imagen = items[i].c[1].v;
      let destino = items[i].c[2].v;
      let containerSlider = document.querySelector(`.slider`);
      let cardItems = document.createElement('div');

      cardItems.classList = "slider_card";
      
      if(containerSlider){
        containerSlider.appendChild(cardItems).innerHTML = `
        <a href="${destino}"><img src="${imagen}" title="${nombre}" alt="${nombre}" loading="lazy"/></a>
        <p>${nombre}</p>
        `
      }
    }    
  });
}