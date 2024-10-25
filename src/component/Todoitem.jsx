/* eslint-disable react/prop-types */
export default function Todoitem({ item, ondelete }) {
  return (
    <div className="row mt-2 bg-primary text-white fs-4">
      <div className="col-6">{item.name}</div>
      <div className="col-4">{item.duedate}</div>
      <div className="col-2">
        <button
          className="btn btn-danger"
          onClick={() => {
            ondelete(item.name);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
