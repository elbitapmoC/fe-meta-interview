// Define a type for the moveRight and moveLeft functions
interface MoveProp {
  moveLeft: () => void;
  moveRight: () => void;
}

const Actions = ({ moveLeft, moveRight }: MoveProp) => {
  return (
    <aside className="actions flex flex-col gap-5">
      <button className="hover:bg-orange-950 shadow-md" onClick={moveLeft}>
        &lt;
      </button>
      <button className="hover:bg-orange-950 shadow-md" onClick={moveRight}>
        &gt;
      </button>
    </aside>
  );
};

export default Actions;
