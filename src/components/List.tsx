type listProps<T> = {
  list: T[];
  handleClick: (item: T) => void;
};

function List<T extends { id: number; name: string }>({
  list,
  handleClick,
}: listProps<T>) {
  return (
    <div>
      <h2>List</h2>
      {list.map((item: T) => (
        <div key={item.id} onClick={() => handleClick(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default List;
