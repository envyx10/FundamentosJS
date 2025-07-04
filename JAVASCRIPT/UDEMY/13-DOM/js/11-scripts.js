// No siempre estarás haciendo traversing a tu dom
const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

// Eventos

// Esto es como decir '' estate atento por si alguien hace click,
// puede que tengas que hacer algo ''
function mostrarOcultarFooter() {
    if (footer.classList.contains("activo")) {
        footer.classList.remove("activo");
        this.classList.remove('activo')
        this.textContent = 'Idioma y moneda'
    } else {
        footer.classList.add("activo");
        this.classList.add('activo')
        this.textContent = 'X cerrar'
    }
}

btnFlotante.addEventListener("click", mostrarOcultarFooter);