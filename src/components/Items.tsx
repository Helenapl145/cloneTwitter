import { DotsThree } from 'phosphor-react'

import './Items.css'


interface ItemsProps {
    desc: string,
    title: string,
    more: string
}

export function Items({desc, title, more} : ItemsProps){
    return(
       <button className='wrapperItems'>
            <div>
                <p>{desc}</p>
                <h3>{title}</h3>
                <p>{more}</p>
            </div>

            <DotsThree />
       </button>
    )
}