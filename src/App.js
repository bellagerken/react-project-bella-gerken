import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"
import Header from "./Header"
import FoodsContainer from "./FoodsContainer"
import Search from "./Search"
import NavBar from "./NavBar"
import Form from "./Form"
import FoodOne from "./FoodOne"
import FoodTwo from "./FoodTwo"
import FoodThree from "./FoodThree"
import FoodFour from "./FoodFour"
import FoodFive from "./FoodFive"
import FoodSix from "./FoodSix"
import {Route} from "react-router-dom"

function App() {

  const [foods, setFoods] = useState([])

  const [searchText, setSearchText] = useState("")

  const [formData, setFormData] = useState({
    nameone: "",
    imageone: "",
    type: "",
    nametwo: "",
    imagetwo: ""
  })

  function updateSearch(event){
    setSearchText(event.target.value)
  }

const filteredFoods = foods.filter(food => {
  if(searchText === ""){
    return true
  }
  return food.nameone.toLowerCase().includes(searchText.toLowerCase()) || food.type.toLowerCase().includes(searchText.toLowerCase())
})
useEffect(() => {
  fetch('http://localhost:3000/foods')
  .then(res => res.json())
  .then(foodData => setFoods(foodData))
}, [])

function updateFormData(event){
  event.preventDefault()
  setFormData({...formData, [event.target.name]: event.target.value})
}

function addFood(event){
  event.preventDefault()
  fetch('http://localhost:3000/foods', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData) 
  })
  .then(res => res.json())
  .then(newData => setFoods([...foods, newData]))
}

  return (
  <div className="app">
    <NavBar/>
  <Route exact path="/">
   <Header />
   <FoodsContainer foods={filteredFoods}/>
   </Route>
   <Route path="/form">
   <Form updateFormData={updateFormData} addFood={addFood}/>
   </Route>
   <Route path="/search">
   <Search updateSearch={updateSearch} searchText={searchText}/>
   <FoodsContainer foods={filteredFoods} />
   </Route>
   <Route path="/foodone">
   <FoodOne foods={foods}/>
   </Route>
   <Route path="/foodtwo">
   <FoodTwo foods={foods}/>
   </Route>
   <Route path="/foodthree">
   <FoodThree foods={foods}/>
   </Route>
   <Route path="/foodfour">
   <FoodFour foods={foods}/>
   </Route>
   <Route path="/foodfive">
   <FoodFive foods={foods}/>
   </Route>
   <Route path="/foodsix">
   <FoodSix foods={foods}/>
   </Route>
  </div>
  )
  }

export default App;
