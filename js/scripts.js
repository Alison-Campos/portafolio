const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

const rootStyles =document.documentElement.style; // accedemos a todas las variables css

const flgasElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

// metodo cambio de lenguaje
const changeLenguage = async (languaje) =>{
    const requestJson = await fetch(`./languages/${languaje}.json`)
    const texts = await requestJson.json()

   for( const textToChange of textsToChange){
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML= texts[section][value]
   } 
}
flgasElement.addEventListener("click", (e) =>{
    changeLenguage(e.target.parentElement.dataset.languaje) ;
});

// metodo para dark o light mode
toggleTheme.addEventListener("click", () =>{
    document.body.classList.toggle("dark"); // togle es un interruptor entre si tiene o no la clase(si no la tiene se la pone y si la tiene aL dar clic se la quita)
    if(toggleIcon.src.includes("moon.svg")){
        toggleIcon.src="assets/icons/sun.svg"; 
        toggleText.textContent="Light Mode";
    }else{
        toggleIcon.src="assets/icons/moon.svg"; 
        toggleText.textContent="Dark Mode";
    }
}); 

// metodo para cambiar de colores las barras
toggleColors.addEventListener("click", (e) => {
    rootStyles.setProperty("--primary-color", e.target.dataset.color); // buca la propiedadprimary color y le pne el color que tiene el data set en el html
});