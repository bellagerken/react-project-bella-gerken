import React from 'react'

function FoodTwo({foods}){


    return(
        <div>
            <h3>CAULIFLOWER FRIED RICE</h3>
            <img src={foods[1].imagetwo} alt='CAULIFLOWER FRIED RICE' />
            <h4>Ingredients:</h4>
            <div>{foods[1].ingredients.map(ingredient => <p>{ingredient}</p>)}</div>
            <h4>Instructions:</h4>
            <div>{foods[1].instructions.map(instruction => <p>{instruction}</p>)}</div>
        </div>  
)}

export default FoodTwo