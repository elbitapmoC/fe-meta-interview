interface ItemProps {
  item: number; // Assuming item is a number, adjust the type if needed
  handleToggle: (item: number) => void; // Assuming handleToggle takes a number as an argument
}

const Item = ({ item, handleToggle }: ItemProps) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          handleToggle(item);
        }}
      />
      <span className="pl-4">{item}</span>
    </label>
  );
};

export default Item;
