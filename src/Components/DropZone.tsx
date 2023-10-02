import Item from "./Item";

const DropZone = ({ items, handleToggle }) => {
  return (
    <section className="dropzone flex flex-col justify-center">
      {items.map((item) => (
        <Item key={item} item={item} handleToggle={handleToggle} />
      ))}
    </section>
  );
};

export default DropZone;
