import AddTodo from '../ToDoComponent/AddTodo';
import AppName from '../ToDoComponent/AppName';
import TodoItem from '../ToDoComponent/TodoItem';

function ToDoComponent() {
  const todoItems = [
    { Name: 'Pay Maintanance', DueDate: '11/01/2024' },
    { Name: 'Internet Bill', DueDate: '16/01/2024' },
    { Name: 'Insurance Due', DueDate: '18/01/2024' },
    { Name: 'Pay Credit Card bill', DueDate: '05/01/2024' },
  ];
  const onDeleteAction =(event)=>{
    return console.log({event});
  }

  return (
    <>
      <AppName />
      <AddTodo />
      <div className="item-container">
        <TodoItem items={todoItems} onDeleteAction={onDeleteAction}/>
      </div>
    </>
  );
}

export default ToDoComponent;
