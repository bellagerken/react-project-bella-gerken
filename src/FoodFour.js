import React from 'react'

function FoodFour({foods}){


    return(
        <div>
            <h3>BAKED KALE CHIPS</h3>
            <img src={foods[3].imagetwo} alt='BAKED KALE CHIPS'/>
            <h4>Ingredients:</h4>
            <div>{foods[3].ingredients.map(ingredient => <p>{ingredient}</p>)}</div>
            <h4>Instructions:</h4>
            <div>{foods[3].instructions.map(instruction => <p>{instruction}</p>)}</div>
        </div>  
)}

export default FoodFour