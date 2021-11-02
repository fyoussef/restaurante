import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DrinkContext = createContext();

const drinkName = 'wine';

const api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;

export function DrinkProvider(props){

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {

        axios.get(api).then(res => {

            const data = res.data;
        
            setDrinks(data.drinks);
        
        });

    }, []);

    return(

        <DrinkContext.Provider value={[drinks, setDrinks]}>
            {props.children}
        </DrinkContext.Provider>

    );
}