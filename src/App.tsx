import DropZone from "./Components/DropZone";
import Actions from "./Components/Actions";
import { useState } from "react";
import { items } from "./data";

function App() {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleToggle = (item) => {
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }

    setCheckedItems(newCheckedItems);
  };

  return (
    <main className="flex items-center gap-10">
      <DropZone items={leftItems} handleToggle={handleToggle} />
      <Actions />
      <DropZone items={rightItems} handleToggle={handleToggle} />
    </main>
  );
}

export default App;
