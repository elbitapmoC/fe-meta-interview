import { useEffect } from "react";
import Item from "./Item";

const DropZone = ({ items, handleToggle }) => {
  useEffect(() => {
    console.log(items);
  }, []);

  return (
    <section className="dropzone flex flex-col justify-center">
      {items.map((item) => (
        <Item key={item} item={item} handleToggle={handleToggle} />
      ))}
    </section>
  );
};

export default DropZone;
