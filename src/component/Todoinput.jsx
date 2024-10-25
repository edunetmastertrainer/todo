import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Todoinput({ onAddbutton }) {
  const [inupttask, setinputtask] = useState();
  const [duedate, setduedate] = useState();

  const handleinput = (event) => {
    setinputtask(event.target.value);
  };
  const handleduedate = (event) => {
    setduedate(event.target.value);
  };
  return (
    <div className="row mt-2">
      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="Add Task"
          value={inupttask}
          onChange={handleinput}
        />
      </div>
      <div className="col-4">
        <input
          className="form-control"
          type="date"
          value={duedate}
          onChange={handleduedate}
        />
      </div>
      <div className="col-2">
        <button
          className="btn btn-primary"
          onClick={() => {
            onAddbutton(inupttask, duedate);
            setduedate("");
            setinputtask("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
