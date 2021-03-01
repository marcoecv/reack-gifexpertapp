import React, { /*useState,useEffect*/ } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGritItem } from './GifGritItem';

export const GifGrid = ( { category } ) => {
    //use effect funciona como el componendidmount y hará que la función getGifs solo se ejecute una unica vez, 
    //de lo contrario se ejecutaria cada vez que el estado del componente cambia

    const { data:images, loading } = useFetchGifs( category );//data:images es uuna forma de renombrar la variable a nivel de desestructuración

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> /* If Ternario de una sola cundición solo se ejecuta en caso de que loading sea true*/ } 
            <div className="card-grid">
                { images.map( img =>
                    <GifGritItem 
                        key = { img.id }
                        { ...img }//Envía todas las propiedades de img como props individuales
                    />
                )}
            </div>
        </>
    )
}
