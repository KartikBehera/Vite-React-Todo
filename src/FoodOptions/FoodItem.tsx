const FoodItem = ({ foodItem, handleBuyButton}) => {

return <li className="list-group-item">{foodItem}
  <button type="button" className="btn btn-info float-end"
  onClick={handleBuyButton}>Buy {foodItem}</button>
  </li>;
};


export default FoodItem;
