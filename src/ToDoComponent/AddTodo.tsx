function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-5">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-5">
          <input type="date" placeholder="Slectc Date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
