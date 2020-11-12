import React, {useEffect} from 'react';

const EmployeeItem = ({match}) => {
    //const [item, setItem] = useState([]);

    const fetchItem = async () => {
        const data = await fetch('');
        const item = await data.json();
        //setItem(item);
        console.log(item);
    };

    useEffect(fetchItem,[]);

    return(
        <div className="item-container">

        </div>
    );
};

export default EmployeeItem;