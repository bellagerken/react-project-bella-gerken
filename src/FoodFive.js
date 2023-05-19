import React from 'react'

function FoodFive({foods}){


    return(
        <div>
            <h3>HEALTHY PEANUT BUTTER CUPS</h3>
            <img src={foods[4].imagetwo} alt='HEALTHY PEANUT BUTTER CUPS' />
            <h4>Ingredients:</h4>
            <div>{foods[4].ingredients.map(ingredient => <p>{ingredient}</p>)}</div>
            <h4>Instructions:</h4>
            <div>{foods[4].instructions.map(instruction => <p>{instruction}</p>)}</div>
        </div>  
)}

export default FoodFive