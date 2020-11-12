import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

const menus = [
    'Employees',
    'Companies',
    'Configuration',
];

const AsideMenu = () => {
    useEffect(() => {
        fetchItem();
    }, []);

    //const [item, setItem] = useState([]);
    //const [isOpen, setOpen] = useState(false);
    
    const fetchItem = async () => {
        const data = await fetch('');
        const item = await data.json();
        //setItem(item);
        console.log(item);
    }

    return (
        <div className="column-container">
            {menus.map(menu => (
                <div className="menu-item">
                    <NavLink className="asidemenu-item" activeClassName="is-active" to={`/${menu}`} exact>{menu}</NavLink>
                </div>
            ))}
        </div>
    );
};

export default AsideMenu; 