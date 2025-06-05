const TodoItem = ({ todo, dispatch }) => {
  return (
    <li className="flex justify-between w-full border border-gray-200 rounded px-8 py-3">
      <span className={`${todo.isCompleted ? "line-through" : "none"}`}>
        {todo.title}
      </span>
      <div className="flex gap-3.5">
        <button
          onClick={() => {
            dispatch({ type: "TOGGLE_TODO", payload: todo.id });
          }}
          className="underline text-blue-500 cursor-pointer hover:text-blue-700 transition"
        >
          toggle
        </button>
        <button
          onClick={() => {
            const updatedTitle = window.prompt(
              "update your todo: ",
              todo.title
            );
            dispatch({
              type: "UPDATE_TODO",
              payload: {
                id: todo.id,
                title: updatedTitle,
              },
            });
          }}
          className="underline text-green-500 cursor-pointer hover:text-green-700 transition"
        >
          edit
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DELETE_TODO", payload: todo.id });
          }}
          className="underline text-red-500 cursor-pointer hover:text-red-700 transition"
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
