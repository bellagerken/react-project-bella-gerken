import React from "react";

function NewFoodForm({addFood, updateFormData}) {
  return (
    <div className="new-food-form">
      <h2>SUBMIT A NEW FOOD</h2>
      <form onSubmit={addFood}>
        <input onChange={updateFormData} type="text" name="nameone" placeholder="Unhealthy food name" required/>
        <input onChange={updateFormData} type="text" name="imageone" placeholder="Unhealthy food image" required/>
        <input onChange={updateFormData} type="text" name="type" placeholder="Food Type" required/>
        <input onChange={updateFormData} type="text" name="nametwo" placeholder="Healthier food name" required/>
        <input onChange={updateFormData} type="text" name="imagetwo" placeholder="Healthier food image" required/>
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default NewFoodForm;