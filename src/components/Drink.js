import React, { useContext } from "react";
import CardContainer from "./CardContainer";
import { DrinkCard } from "./Cards";
import { DrinkContext } from '../DrinkContext';

// const drinkName = 'wine';

// const api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;

function Drinks(){

    const [drinks, setDrinks] = useContext(DrinkContext);

    // const [drinks, setDrinks] = useState([]);

    // useEffect(() => {

    //     axios.get(api).then(res => {

    //         const data = res.data;
        
    //         setDrinks(data.drinks);
        
    //     });

    // }, []);

    return(
        <>
        <p className="text-3xl text-center font-extrabold mt-8">Bebidas</p>
        <CardContainer>
            <DrinkCard data={drinks} />
            <DrinkCard data={drinks} />
        </CardContainer>
        </>
    );

}

export default Drinks;