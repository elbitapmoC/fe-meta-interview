import { useState } from "react";
import DropZone from "./Components/DropZone";
import Actions from "./Components/Actions";
import { intersection, not } from "./utils/utils";
import { items } from "./data/data";

// Define a type for your items, which is an array of numbers
type Item = number;

// Define a type for checked items, which is an array of items
type CheckedItems = Item[];

// Define a type for the handleToggle function
type HandleToggle = (item: Item) => void;

// Define a type for the moveRight and moveLeft functions
type MoveFunction = () => void;

function App() {
  const [leftItems, setLeftItems] = useState<Item[]>(items);
  const [rightItems, setRightItems] = useState<Item[]>([]);
  const [checkedItems, setCheckedItems] = useState<CheckedItems>([]);

  const leftCheckedItems = intersection(leftItems, checkedItems);
  const rightCheckedItems = intersection(rightItems, checkedItems);

  const handleToggle: HandleToggle = (item) => {
    const currentIndex = checkedItems.indexOf(item);

    const newCheckedItems = [...checkedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }

    setCheckedItems(newCheckedItems);
  };

  const moveRight: MoveFunction = () => {
    setRightItems(rightItems.concat(leftCheckedItems));
    setLeftItems(not(leftItems, leftCheckedItems));
    setCheckedItems(not(checkedItems, leftCheckedItems));
  };

  // const moveLeft = (): void => {
  const moveLeft: MoveFunction = () => {
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
