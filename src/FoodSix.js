import React from 'react'

function FoodSix({foods}){


    return(
        <div>
            <h3>FROZEN YOGURT BARK</h3>
            <img src={foods[5].imagetwo} alt='FROZEN YOGURT BARK' />
            <h4>Ingredients:</h4>
            <div>{foods[5].ingredients.map(ingredient => <p>{ingredient}</p>)}</div>
            <h4>Instructions:</h4>
            <div>{foods[5].instructions.map(instruction => <p>{instruction}</p>)}</div>
        </div>  
)}

export default FoodSix