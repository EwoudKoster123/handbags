import React from 'react';

function Product({title, image, price, description}) {
    return (
        <article className="product">
            <span>{title}</span>
            <img src={image} alt={title}/>
            <p className="productDescription">{description}</p>
            <h4 className="productPrice">{price}</h4>
        </article>
    );
}

export default Product;