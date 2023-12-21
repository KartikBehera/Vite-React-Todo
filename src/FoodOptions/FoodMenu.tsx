import { useState } from 'react';
import FoodItems from '../FoodOptions/FoodItems';
import ItemsNotfound from '../FoodOptions/ItemsNotfound';
import CustomFood from './CustomFood';

function FoodMenu() {
  let foodItems = [];
  foodItems = ['Mushroom Manchurian', 'Meghana Chicken 555', 'Chicken Lollypop', 'Prawns Fry', 'Butter Chicken Curry', 'Meghana Special Biryani', 'Tandoori Chicken Platter'];
  
  let stateArr = useState("Hi!");
  let showCustomText = stateArr[0];
  let setStateText = stateArr[1];

  const onValueChange = () => {
    console.log(stateArr);
    setStateText(event.target.value);
  }
  return (
    <>
      <h1>Healthy Food</h1>
      <ItemsNotfound items={foodItems} />
      <CustomFood onTextChange={onValueChange}></CustomFood>
      <p>{showCustomText}</p>
      <hr/>
      <FoodItems items={foodItems} />
    </>
  );
}

export default FoodMenu;
