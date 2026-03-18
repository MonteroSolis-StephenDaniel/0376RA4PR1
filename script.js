//RA3Ex7 - Activitats ràpides DOM JS

//1 - Selecció: Usa querySelector per canviar el color d'un <h1> quan la pàgina carregui.
let titol = document.querySelector("#titol-principal");
titol.style.color = "#835E54";

//2 - Contingut: Fes que un paràusant textContent.graf <p> mostri "Hola Món" 
const paragraf = document.querySelector("#paragraf-hola");
paragraf.textContent = "Hola Món";


//3 - Atributs: Canvia la 'src' d'una imatge <img> usant setAttribute.
const imatge = document.querySelector("#imatge-canviant");
imatge.setAttribute("src", "https://static01.nyt.com/athletic/uploads/wp/2023/12/07062547/GettyImages-1821074351-scaled.jpg");

//4 - Estils: Canvia el color de fons (backgroundColor) d'un element en fer-li clic.
const caixaEstil = document.querySelector("#caixa-estil");
caixaEstil.addEventListener("click", function () {
    caixaEstil.style.backgroundColor = "#ffd700";
});

//5 - Classes: Crea un botó que afegeixi/tregui la classe 'actiu' amb classList.toggle.
const botoToggle = document.querySelector("#boto-toggle");
const textClasse = document.querySelector("#text-classe");
botoToggle.addEventListener("click", function () {
    textClasse.classList.toggle("actiu");
});

//6 - Esdeveniments: Afegeix un addEventListener a un botó perquè tregui una alerta (alert).
const botoAlerta = document.querySelector("#boto-alerta");
botoAlerta.addEventListener("click", function () {
    alert("Has clicat el botó!");
});

//7 - Estructura: Crea un nou <li> amb createElement i afegeix-lo a una <ul> amb appendChild.
const botoAfegir = document.querySelector("#boto-afegir");
const llista = document.querySelector("#llista-compra");
botoAfegir.addEventListener("click", function () {
    const nouItem = document.createElement("li");
    nouItem.textContent = "Nou producte";
    llista.appendChild(nouItem);
});

//8 - Eliminació: Fes que un element desaparegui en fer-li clic usant el mètode remove().
const elementEliminar = document.querySelector("#element-eliminar");
elementEliminar.addEventListener("click", function () {
    elementEliminar.remove();
});