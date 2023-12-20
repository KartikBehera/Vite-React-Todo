function TodoItem({ items }) {
  return (
    <div className="container">
      {items.map((item) => (
        <div className="row m-3">
          <div className="col-5">{item.Name}</div>
          <div className="col-5">{item.DueDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
