import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Employee = () => {
    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('');
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        <div className="menu-container">
            {items.map(item => (
                <div key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        <h1>{item.name}</h1>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Employee;