import React, {useState} from "react"

function Food({food}){

    const [isQuote, setIsQuote] = useState(true)

    function toggleQuote(){
      setIsQuote((isQuote => !isQuote))
    }




    return (
        <li className="cards__item">
      <div className="card">
        <img onClick={toggleQuote}
          src={isQuote ? food.imageone : food.imagetwo}
          alt={food.nameone}
          className="card__image"
          id={"food-" + food.id}
        />
        <div className="card__content">
        <p>{isQuote ? food.nameone : food.nametwo}</p>
        </div>
      </div>
    </li>
    )
}

export default Food