let servicos = "";
const detalhes = [
    {
        titulo: 'Endrick - 19 anos',
        descricao: 'Atacante ',
        imagem: 'src/img/Endrick.jpg'
    },
    {
        titulo: 'Marquinhos - 32 anos',
        descricao: 'Zagueiro',
        imagem: 'src/img/Marquinhos.jpg'
    },
    {
        titulo: 'Neymar - 34 anos',
        descricao: 'Atacante ',
        imagem: 'src/img/Neymar.webp'
    },
    {
        titulo: 'Vinicius Junior - 25 anos ',
        descricao: 'Atacante',
        imagem: 'src/img/Vinicius_junior.png'
    }
]

//
servicos += `<div class="bem-grid-auto">`
for(let i=0; i < detalhes.length; i++){
servicos += `
            <div class="bem-card">
                <img class="bem-card__image" src="${detalhes[i].imagem}" alt="Image description">
                <div class="bem-card__body">
                    <h3 class="bem-card__title">${detalhes[i].titulo}</h3>
                    <p>${detalhes[i].descricao}</p>
                </div>
            </div>
        
    `
}
servicos += `</div>`

export default servicos;