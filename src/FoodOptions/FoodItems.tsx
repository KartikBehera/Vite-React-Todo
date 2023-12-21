import { useState } from 'react';
import FoodItem from '../FoodOptions/FoodItem';

const FoodItems = ({ items }) => {
  
  let [getActiveFoodItems, setActiveFoodItems] = useState([]);

  let handleBuyButton = (item, event) =>{
    if(!getActiveFoodItems.includes(item)){
      let newItems = [...getActiveFoodItems, item];
      setActiveFoodItems(newItems);
    }
  }

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <FoodItem key={item} 
          foodItem={item} 
          bought = {getActiveFoodItems.includes(item)}
          handleBuyButton={(event) => handleBuyButton(item, event)} />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
