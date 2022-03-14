(()=>{
const footerContent = document.querySelector('footer');
const añoActual = new Date().getFullYear();

footerContent.innerHTML = `
<p>Esto es una demostración.<br>Los productos, servicios y/o marcas no son reales.</p>
<p>Todos los derechos reservados © ${añoActual}</p>
<div>
  <span>by</span>
  <a href="https://eldigimenu.com" target="_blank">
    <img
      id="brand-eldigimenu"
      src="./assets/svg/brand-eldigimenu.svg"
      alt="eldigimenú"
      title="eldigimenú"
    />
  </a>
</div>

`
})();