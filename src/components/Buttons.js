import React from 'react';

export const ButtonMenu = () => {
    return (
        <div className="rounded-md shadow">
            <a href="/" 
               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Menu
            </a>
        </div>
    );
}

export const ButtonContact = () => {
    return (
        <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href="/" 
               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Contate-nos
            </a>
        </div>
    );
}