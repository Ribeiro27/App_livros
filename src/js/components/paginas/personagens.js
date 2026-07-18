import buscarServicos from "../Services/api.js"
let cardServicos = ""
let numero = 1
async function criarPagina(app){
        const nPagina = `?page=${1}`;
        const detalhes = await buscarServicos("https://rickandmortyapi.com/api/character",nPagina);
        console.log(detalhes.results)
        cardServicos += `<div class >
    
    <button class="bem-bnt bem-bnt--prmary">
        <span class="bem-bnt__icon"> ◄ </span>
        <span class="bem-bnt__text"> ◄ </span>
        
      </button>
      
  
       
    
</div>`
       

        for(let i=0; i < detalhes.results.length; i++){
            cardServicos += `
                    <div class="bem-card">
                        <img class="bem-card__image" src="${detalhes.results[i].image}" alt="Image description">
                        <div class="bem-card__body">
                            <h3 class="bem-card__title">${detalhes.results[i].name}</h3>
                            <p>${detalhes.results[i].species}</p>
                        </div>
                    </div>
                
            `
        }
    cardServicos += `</div>`
    app.innerHTML = cardServicos
   

}
async function capturaBotoes() {
    const botao_esquerdo = document.getElementById("bnt-esquerda")
   const botao_direito = document.getElementById("bnt-direita")

   botao_esquerdo.addEventListener("click", ()=>{
    if(numero> 1){
        numero=numero-1
        console.log(numero)

    }
   }
)
botao_direito.addEventListener("click", ()=>{
    if(numero> 20){
        numero ++
        console.log(numero)
console.log(numero)
    
}

export default{
    url: "#rick",
    label:"Buscar API",
    pagina:criarPagina
}