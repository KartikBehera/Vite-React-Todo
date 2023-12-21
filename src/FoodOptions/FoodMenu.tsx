import { useState } from 'react';
import FoodItems from '../FoodOptions/FoodItems';
import ItemsNotfound from '../FoodOptions/ItemsNotfound';
import CustomFood from './CustomFood';

function FoodMenu() {
  let foodItems = ['Mushroom Manchurian', 'Meghana Chicken 555', 'Chicken Lollypop', 'Prawns Fry', 'Butter Chicken Curry', 'Meghana Special Biryani', 'Tandoori Chicken Platter'];
 
  let [getFoodItems, setFoodItems] = useState(foodItems);

  const onKeyDown = () => {
    console.log(event);
    if(event.key === "Enter")
    {
      let newFoodItem = event.target.value;
      let updateFoodItems = [...getFoodItems, newFoodItem]
      setFoodItems(updateFoodItems);
      event.target.value = "";
      //setStateValue(event.target.value);
    }
  }
  return (
    <>
      <h1>Healthy Food</h1>
      <ItemsNotfound items={getFoodItems} />
      <CustomFood handleOnKeyDown={onKeyDown}></CustomFood>
      <hr/>
      <FoodItems items={getFoodItems} />
    </>
  );
}

export default FoodMenu;
