export const infoModales = (API) =>{
  
  async function fetchDataJSON() {
      const response = await fetch(API);
      const data = await response.text();
      const corteRespuesta = data.slice(47, -2);
      const respuestaJSON = JSON.parse(corteRespuesta);
      const items = respuestaJSON.table.rows;
      return items;
  }

  fetchDataJSON().then(items => {

    const datos = document.querySelector('#icon-top-1');

    const logo = items[1].c[0].v;
    const direccion = items[1].c[1].v;
    const horario = items[1].c[2].v;
    const telefono = items[1].c[3].v;
    const facebook = items[1].c[4].v;
    const instagram = items[1].c[5].v;
    const web = items[1].c[6].v;
    const fechaActualizacion = items[1].c[7].v;

    const config = document.querySelector('#icon-top-2');
    const modal = document.querySelector('.client');

    datos.addEventListener("click", async e =>{
      if(modal.classList.contains('close')){
        modal.innerHTML =`
        <img  id="brand-eldigimenu-modal"
              src="${logo}"
              alt="eldigimenú"
              title="eldigimenú"
              
        />
        <h3 class="title-modal-info">Dirección</h3> 
        <p>${direccion}</p>
        <h3 class="title-modal-info">Horario</h3> 
        <p>${horario}</p> 
        <h3 class="title-modal-info">Teléfonos</h3> 
        <p><a href="tel:+34${telefono}" style="text-decoration:none; color: inherit;">${telefono}</a></p>
        <h3 class="title-modal-info">Redes Sociales</h3> 
        <div class="rrss-container">     
          <a href="${web}" target="_blank"><i class="fa-solid fa-globe"></i></a>
          <a href="${facebook}" target="_blank"><i class="fa-brands fa-facebook"></i></a>
          <a href="${instagram}" target="_blank"><i class="fa-brands fa-instagram"></i></a> 
        </div>             
        <button id="btn" class="btn-modal" onclick="cerrarModales()">Cerrar</button>
        `;
        modal.classList.remove('close');
        modal.classList.add('open');
      }else if(modal.classList.contains('open')){
        modal.classList.remove('open');
        modal.classList.add('close');
      }
    });

    config.addEventListener("click", async e =>{
      if(modal.classList.contains('close')){
        modal.innerHTML =`
        <img  id="brand-eldigimenu-modal"
              src="${logo}"
              alt="eldigimenú"
              title="eldigimenú"
        />
        <h3 class="title-modal-info">Idiomas</h3> 
        <div class="config-container">     
          <button id="btn" class="btn-config">Español</button> 
          <button id="btn" class="btn-config">Inglés</button>
          <button id="btn" class="btn-config">Fránces</button>    
        </div>   
        <h3 class="title-modal-info">Comparte el menú</h3> 
        <div class="config-container">     
          <button id="btn" class="btn-config verde"><i style="font-weight:600" class="fa-brands fa-whatsapp"></i> WhatsApp</button> 
          <button id="btn" class="btn-config"><i class="fa-solid fa-link"></i> Copiar enlace</button> 
        </div> 
        <span class="span-config">Última actualización: ${fechaActualizacion}</span>       
        <button id="btn" class="btn-modal" onclick="cerrarModales()">Cerrar</button>
        `;
        modal.classList.remove('close');
        modal.classList.add('open');
      }else if(modal.classList.contains('open')){
        modal.classList.remove('open');
        modal.classList.add('close');
      }
    });
  });
}