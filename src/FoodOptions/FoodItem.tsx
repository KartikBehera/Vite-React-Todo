const FoodItem = ({ foodItem, handleBuyButton, bought}) => {

return <li className={`list-group-item ${bought && "active"}`}>{foodItem}
  <button type="button" className="btn btn-info float-end"
  onClick={handleBuyButton}>Buy</button>
  </li>;
};


export default FoodItem;
