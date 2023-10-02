const Actions = ({ moveLeft, moveRight }) => {
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
