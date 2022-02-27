import React from 'react';

function Tile({title, children, image}){
    return(
        <section>
            <h2>{title}</h2>
            {image && <img src={image} alt={title}/>}
            {children}
        </section>
    )
}

export default Tile;