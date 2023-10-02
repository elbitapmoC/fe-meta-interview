import DropZone from "./Components/DropZone";
import Actions from "./Components/Actions";
import { useState } from "react";
import { items } from "./data/data";

import { intersection, not } from "./utils/utils";

function App() {
  const [leftItems, setLeftItems] = useState(items);

  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const leftCheckedItems = intersection(leftItems, checkedItems);
  const rightCheckedItems = intersection(rightItems, checkedItems);

  const handleToggle = (item: number) => {
    console.log(typeof item);
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }

    setCheckedItems(newCheckedItems);
  };

  const moveRight = () => {
    setRightItems(rightItems.concat(leftCheckedItems));
    setLeftItems(not(leftItems, leftCheckedItems));
    setCheckedItems(not(checkedItems, leftCheckedItems));
  };

  const moveLeft = () => {
    setLeftItems(leftItems.concat(rightCheckedItems));
    setRightItems(not(rightItems, rightCheckedItems));
    setCheckedItems(not(checkedItems, rightCheckedItems));
  };

  return (
    <main className="flex items-center gap-10">
      <DropZone items={leftItems} handleToggle={handleToggle} />
      <Actions moveLeft={moveLeft} moveRight={moveRight} />
      <DropZone items={rightItems} handleToggle={handleToggle} />
    </main>
  );
}

export default App;
