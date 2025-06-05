const TodoList = ({ children }) => {
  return (
    <ul className="mx-auto w-[20%] px-2 flex flex-col items-center gap-y-4 mt-4">
      {children}
    </ul>
  );
};

export default TodoList;
