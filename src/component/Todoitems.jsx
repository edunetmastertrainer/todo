/* eslint-disable react/prop-types */
import Todoitem from "./Todoitem";

export default function Todoitems({ items, ondelete }) {
  return (
    <>
      {items.length == 0 ? (
        <p className="bg-danger fs-2 text-center">No Task</p>
      ) : (
        ""
      )}
      {items.map((item) => {
        return <Todoitem item={item} ondelete={ondelete} />;
      })}
    </>
  );
}
