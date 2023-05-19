import React from 'react'

function FoodOne({foods}){


    return(
        <div className='foodone'>
            <h3>HEALTHY BANANA OATMEAL PANCAKES</h3>
            <img src={foods[0].imagetwo} alt='HEALTHY BANANA OATMEAL PANCAKES' />
            <h4>Ingredients:</h4>
            <div>{foods[0].ingredients.map(ingredient => <p>{ingredient}</p>)}</div>
            <h4>Instructions:</h4>
            <div>{foods[0].instructions.map(instruction => <p>{instruction}</p>)}</div>
        </div>  
)}

export default FoodOne