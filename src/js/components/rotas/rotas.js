import { home, servicos, sobre, contato, capturarFormulario } from '../paginas/paginas.js'
//    URL  cria a ancora ou link
//    LABEL  nome da ancora
//    PAGINA  é que chama a pagina
//    ACAO    é evento dentro da pagina
const roteador = [
    {
        url:'#inicio',
        label:'Inicial',
        pagina: home
    },
    {
        url:'#sobre',
        label:'Sobre',
        pagina: sobre
    },
    {
        url:'#servicos',
        label:'Serviços',
        pagina: servicos
    },
    {
        url:'#contato',
        label:'Contato',
        pagina: contato,
        acao: capturarFormulario
    }
]

export default roteador;
