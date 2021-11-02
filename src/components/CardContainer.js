import React from "react";

function CardContainer(props){
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">

            <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">

                { props.children }
            
            </section>

        </section>
    );
}

export default CardContainer;