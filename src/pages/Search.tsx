import { MagnifyingGlass } from "phosphor-react";
import { ReactNode, useState } from "react";

import { ForYou } from "./ForYou";
import { Trending } from "./Trending";

import './Search.css'

export function Search(){
    const [content, setContent] = useState<ReactNode | null>(<ForYou />);
    const [selectedItem, setSelectedItem] = useState('item1');

  
    const handleNavLinkClick = (contentComponent: ReactNode) => {
      setContent(contentComponent);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
      };
    
    return(
        <div className="wrapper">
            <div className="inputSearch">
                <MagnifyingGlass />
                <input type="text" name="" id="" placeholder="Buscar"/>
            </div>

            <nav className="navigation">
                <ul>
                    <li className={selectedItem === 'item1' ? 'selected' : ''} onClick={() => handleItemClick('item1')}>
                        <button onClick={() => handleNavLinkClick(<ForYou />)}>For You</button>
                    </li>
                    <li className={selectedItem === 'item2' ? 'selected' : ''} onClick={() => handleItemClick('item2')}>
                        <button onClick={() => handleNavLinkClick(<Trending />)}>Trending</button>
                    </li>
                    <li className={selectedItem === 'item3' ? 'selected' : ''} onClick={() => handleItemClick('item3')}>
                        <button onClick={() => handleNavLinkClick(<ForYou />)}>News</button>
                    </li>
                    <li className={selectedItem === 'item4' ? 'selected' : ''} onClick={() => handleItemClick('item4')}>
                        <button onClick={() => handleNavLinkClick(<ForYou />)}>Sports</button>
                    </li>
                    <li className={selectedItem === 'item5' ? 'selected' : ''} onClick={() => handleItemClick('item5')}>
                        <button onClick={() => handleNavLinkClick(<ForYou />)}>Entertainment</button>
                    </li>
                </ul>
            </nav>

            <div>
                {content}
            </div>
        
        </div>
    )
}