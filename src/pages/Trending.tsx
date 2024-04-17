import { Items } from '../components/Items'
import './Trending.css'

export function Trending(){
    return(
     <div>
        <h2 className='title'>Tendências de Brasil</h2>
        <div className="wrapperContent">
            <Items desc='Esportes · Assunto do momento' title='Corinthians' more='300 mil posts' />
            <Items desc='News · Assunto do momento' title='Brasil' more='150  mil posts' />
            <Items desc='Música · Assunto do momento' title='KayBlack' more='80 mil posts' />
            <Items desc='Filme · Assunto do momento' title='Toy Story' more='50 mil posts' />
            <Items desc='Tecnologia · Assunto do momento' title='JavaScript' more='5,134 mil posts' />
            <Items desc='Programas de competição · Assunto do momento' title='BBB' more='2.005  mil posts' />
            <Items desc='Esportes Assunto do momento' title='Neymar' more='1.234 mil posts'/>
        </div>
     </div>
    )
}