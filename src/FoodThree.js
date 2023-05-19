import React from 'react'

function FoodThree({foods}){


    return(
        <div>
            <h3>CACIO E PEPE SPAGHETTI SQUASH</h3>
            <img src={foods[2].imagetwo} alt='CACIO E PEPE SPAGHETTI SQUASH' />
            <h4>Ingredients:</h4>
            <div>{foods[2].ingredients.map(ingredient => <p>{ingredient}</p>)}</div>
            <h4>Instructions:</h4>
            <div>{foods[2].instructions.map(instruction => <p>{instruction}</p>)}</div>
        </div>  
)}

export default FoodThree