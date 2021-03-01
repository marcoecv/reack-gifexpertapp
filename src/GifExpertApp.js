import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball' ]

    const [categories, setcategories] = useState([ 'One Punch' ]);

    // const handleAdd = () => {
    //     //setcategories([ ...categories,'Queen']) //Uso de operador spread para crear un nuevo arreglo y agregar un elemento a final
    //     setcategories(cat => [...cat,'Queen']);//Recordar que set categories puede tener un callback como parametro
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setcategories }/>
            <hr/>
            <ol>
                {
                    categories.map(category =>
                        <GifGrid 
                            category={category}
                            key={ category }
                    />
                    )
                }
            </ol>
        </>
    )
}
