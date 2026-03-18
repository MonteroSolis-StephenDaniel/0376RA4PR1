# 📘 Documentació — Activitats ràpides DOM JS

Aquest document recull una sèrie d’exercicis bàsics per practicar la manipulació del DOM amb JavaScript.

---

## 🧩 Exercicis

### 1. Selecció d’elements
Canviar el color d’un `<h1>` quan la pàgina es carrega.

**Solució:**
`let titol = document.querySelector("#titol-principal");
titol.style.color = "#835E54";`

---

### 2. Modificació de contingut
Fer que un paràgraf `<p>` mostri el text "Hola Món".

**Solució:**
`const paragraf = document.querySelector("#paragraf-hola");
paragraf.textContent = "Hola Món";`

---

### 3. Manipulació d’atributs
Canviar la propietat `src` d’una imatge.

**Solució:**
`const imatge = document.querySelector("#imatge-canviant");
imatge.setAttribute("src", "https://static01.nyt.com/athletic/uploads/wp/2023/12/07062547/GettyImages-1821074351-scaled.jpg");`

---

### 4. Canvi d’estils amb esdeveniments
Canviar el color de fons d’un element en fer clic.

**Solució:**
`const caixaEstil = document.querySelector("#caixa-estil");
caixaEstil.addEventListener("click", function () {
    caixaEstil.style.backgroundColor = "#ffd700";
});`

---

### 5. Gestió de classes
Afegir o eliminar la classe `actiu` amb un botó.

**Solució:**
`const botoToggle = document.querySelector("#boto-toggle");
const textClasse = document.querySelector("#text-classe");
botoToggle.addEventListener("click", function () {
    textClasse.classList.toggle("actiu");
});`

---

### 6. Esdeveniments (alertes)
Mostrar una alerta quan es fa clic a un botó.

**Solució:**
`const botoAlerta = document.querySelector("#boto-alerta");
botoAlerta.addEventListener("click", function () {
    alert("Has clicat el botó!");
});`

---

### 7. Creació d’elements
Crear un nou `<li>` i afegir-lo a una llista `<ul>`.

**Solució:**
`const botoAfegir = document.querySelector("#boto-afegir");
const llista = document.querySelector("#llista-compra");
botoAfegir.addEventListener("click", function () {
    const nouItem = document.createElement("li");
    nouItem.textContent = "Nou producte";
    llista.appendChild(nouItem);
});`

---

### 8. Eliminació d’elements
Eliminar un element del DOM en fer clic.

**Solució:**
`const elementEliminar = document.querySelector("#element-eliminar");
elementEliminar.addEventListener("click", function () {
    elementEliminar.remove();
});`

---

## ✅ Resum

En aquests exercicis s’han practicat:

- Selecció d’elements (`querySelector`)
- Modificació de contingut (`textContent`)
- Manipulació d’atributs (`setAttribute`)
- Canvi d’estils (`style`)
- Gestió d’esdeveniments (`addEventListener`)
- Treball amb classes (`classList.toggle`)
- Creació d’elements (`createElement`, `appendChild`)
- Eliminació d’elements (`remove()`)