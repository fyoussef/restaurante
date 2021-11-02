import React, { useContext } from "react";
import { DrinkContext } from '../DrinkContext'

import Panquecas from '../assets/panquecas.jpg';


export const Card = (props) => {
    return (

        <>
        
        <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className="relative w-full h-80 md:h-64 lg:h-44">
                <img src={Panquecas}
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    className="w-full h-full object-center object-cover" />
            </div>
            <div className="px-3 py-4">
                <h3 className="text-sm text-gray-500 pb-2">
                    <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="/">
                        <span className="absolute inset-0"></span>
                        {props.title}
                    </a>
                </h3>
                <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                    {props.desc}
                </p>
            </div>
        </article>

        </>

    );
}

export const DrinkCard = () => {

    const [drink, setDrink] = useContext(DrinkContext);
    
    return (
        <>

        {drink.map((item, key) => {
            return (

                <article key={key} className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                    <div className="relative w-full h-80 md:h-64 lg:h-44">
                        <img src={item.strDrinkThumb}
                            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                            className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="px-3 py-4">
                        <h3 className="text-sm text-gray-500 pb-2">
                            <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="/">
                                <span className="absolute inset-0"></span>
                                {item.strDrink}
                            </a>
                        </h3>
                        <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                            {item.strInstructions}
                        </p>
                    </div>
                </article>
                
            );
        })}

        </>
    )
}