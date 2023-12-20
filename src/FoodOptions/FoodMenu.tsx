import FoodItems from '../FoodOptions/FoodItems';
import ItemsNotfound from '../FoodOptions/ItemsNotfound';

function FoodMenu() {
  let foodItems = [];
  foodItems = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE'];

  return (
    <>
      <h1>Healthy Food</h1>
      <ItemsNotfound items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default FoodMenu;
