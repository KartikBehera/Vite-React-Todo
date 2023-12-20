import ToDoComponent from './ToDoComponent/ToDoComponent';
import BharatClock from './BharatClock/BharatClock';
import FoodMenu from './FoodOptions/FoodMenu';

function App() {
  return (
    <center className="todo-container">
      <ToDoComponent />
      <hr />
      <BharatClock />
      <hr />
      <FoodMenu />
    </center>
  );
}
export default App;
