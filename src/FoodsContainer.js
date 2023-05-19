import React from "react"
import Food from "./Food"

function FoodsContainer({foods}){

    const renderFoods = foods.map(food => <Food key={food.id} food={food} />)

    return (
        <ul className="cards">
      {renderFoods}
    </ul>
    )
}

export default FoodsContainer