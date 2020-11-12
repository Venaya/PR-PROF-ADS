import React, {useEffect} from 'react';

const CompanyItem = ({ match }) => {
    //const [item, setItem] = useState([]);

    const fetchItem = async () => {
        const data = await fetch(`/${match.id}`);
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

export default CompanyItem;

