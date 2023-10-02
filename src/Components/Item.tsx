const Item = ({ item, handleToggle }) => {
  return (
    <label>
      <input
        type="checkbox"
        id={item}
        onChange={() => {
          handleToggle(item);
        }}
      />
      <span className="pl-4">{item}</span>
    </label>
  );
};

export default Item;
