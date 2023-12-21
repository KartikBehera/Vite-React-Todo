import FoodItem from '../FoodOptions/FoodItem';

const FoodItems = ({ items }) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <FoodItem key={item} foodItem={item} handleBuyButton={() => console.log({item})} />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
