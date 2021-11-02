import React from 'react';
import CardContainer from './CardContainer';
import { Card } from './Cards';

function Food (){
    return(

        <>
        <p className="text-3xl text-center font-extrabold mt-8">Pratos</p>
        < CardContainer >
            < Card title="Panqueca 1" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            < Card title="Panqueca 2" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            < Card title="Panqueca 3" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            < Card title="Panqueca 4" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

            < Card title="Panqueca 5" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            < Card title="Panqueca 6" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            < Card title="Panqueca 7" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            < Card title="Panqueca 8" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </CardContainer>
        </>
    );
}

export default Food;