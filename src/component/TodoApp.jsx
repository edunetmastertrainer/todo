import { useState } from "react";
import Todoinput from "./Todoinput";
import Todoitems from "./Todoitems";
import Tpodohead from "./Tpodohead";
const item1 = [];

export default function TodoApp() {
  const [items, setitems] = useState(item1);
  const handleAddButton = (inupttask, duedate) => {
    setitems([...items, { name: inupttask, duedate: duedate }]);
  };
  const handledeleteButton = (x) => {
    setitems(
      items.filter((item) => {
        return item.name !== x;
      })
    );
  };
  return (
    <div className="container">
      <Tpodohead />
      <Todoinput onAddbutton={handleAddButton} />
      <Todoitems items={items} ondelete={handledeleteButton} />
    </div>
  );
}
