import { Items } from "../components/Items";


export function ForYou(){
    return(
       <div className="wrapperContent">
        <Items desc='Esportes · Assunto do momento' title='Corinthians' more='300 mil posts' />
        <Items desc='Música · Assunto do momento' title='KayBlack' more='Assuntos do Momento: Caverinha' />
        <Items desc='Filme · Assunto do momento' title='Toy Story' more='50 mil posts' />
        <Items desc='Esportes Assunto do momento' title='Neymar' more='Assuntos do Momento: Mbappe'/>
        <Items desc='Tecnologia · Assunto do momento' title='JavaScript' more='Assuntos do Momento: Python' />
        <Items desc='News · Assunto do momento' title='Brasil' more='150  mil posts' />
        <Items desc='Programas de competição · Assunto do momento' title='BBB' more='2.005  mil posts' />
        
       </div>
    )
}