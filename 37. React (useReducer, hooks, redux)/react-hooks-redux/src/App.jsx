import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import useCounter from "./hooks/useCounter";
import useFetch from "./hooks/useFetch";

// counter reducer function
// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         counter: state.counter + action.payload,
//       };
//     case "DECREMENT":
//       return {
//         counter: state.counter - 1,
//       };
//     case "RESET":
//       return {
//         counter: 0,
//       };
//   }
// }

//todo reducer function
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: new Date().getTime(),
            title: action.payload,
            isCompleted: false,
            createdAt: new Date(),
          },
        ],
      };
    case "UPDATE_TODO":
      return {
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id == action.payload.id) {
              todo.title = action.payload.title;
            }
            return todo;
          }),
        ],
      };
    case "DELETE_TODO":
      return {
        todos: [...state.todos.filter((todo) => todo.id != action.payload)],
      };
    case "TOGGLE_TODO":
      return {
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id == action.payload) {
              if (todo.isCompleted) {
                console.log("TEST 1");
                todo.isCompleted = false;
              } else {
                console.log("TEST 2");
                todo.isCompleted = true;
              }
              return { ...todo };
            } else {
              return todo;
            }
          }),
        ],
      };
    case "CLEAR":
      return {
        todos: [],
      };
    default:
      return {
        todos: state.todos,
      };
  }
}

const App = () => {
  const inputRef = useRef("");
  const [count, increment, decrement] = useCounter(10);
  const { data, loading, error } = useFetch(
    "https://northwind.vercel.app/api/categories"
  );

  useEffect(() => {
    console.log("data: ", data);
    console.log("loading: ", loading);
    console.log("error: ", error);
  }, [data, loading, error]);

  // const [state, dispatch] = useReducer(reducer, { counter: 0 });
  //todo example
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
  });

  return (
    <div>
      {/* <div>
        <h1 className="text-center text-lime-700 text-2xl font-bold my-4">
          React hooks (useRef & useReducer)
        </h1>
        <div className="w-[25%] mx-auto my-4 flex flex-col gap-3 items-center justify-center">
          <input
            ref={inputRef}
            id="inp"
            className="border rounded border-gray-300 w-full py-2 px-4"
            type="text"
            placeholder="search..."
          />
          <button
            onClick={() => {
              inputRef.current.focus();
            }}
            id="btn"
            className="rounded px-4 py-2 bg-fuchsia-500 text-white font-bold cursor-pointer"
          >
            focus input
          </button>
        </div>

        <hr />
        <h2 className="text-center text-2xl text-amber-700 font-bold my-6">
          useReducer hook
        </h2>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => {
              dispatch({ type: "DECREMENT" });
            }}
            className="rounded px-4 py-2 bg-lime-500 text-white font-bold hover:bg-lime-800 transition cursor-pointer"
          >
            -
          </button>
          <span className="text-xl font-bold">{state.counter}</span>
          <button
            onClick={() => {
              dispatch({ type: "INCREMENT", payload: 5 });
            }}
            className="rounded px-4 py-2 bg-lime-500 text-white font-bold hover:bg-lime-800 transition cursor-pointer"
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch({ type: "RESET" });
            }}
            className="rounded px-4 py-2 bg-red-500 text-white font-bold hover:bg-red-800 transition cursor-pointer"
          >
            reset
          </button>
        </div>
      </div> */}

      <hr className="my-6 w-[90%] mx-auto bg-gray-600" />

      <h2 className="text-center text-2xl text-cyan-600 font-bold my-6">
        todo example with useReducer
      </h2>

      <AddTodo dispatch={dispatch} />
      <TodoList>
        {state.todos &&
          state.todos.map((todo) => {
            return <TodoItem dispatch={dispatch} key={todo.id} todo={todo} />;
          })}
      </TodoList>
      <button
        onClick={() => {
          dispatch({ type: "CLEAR" });
        }}
        className="mx-auto block my-3 cursor-pointer rounded bg-blue-600 text-white px-4 py-2"
      >
        clear all
      </button>
    </div>
  );
};

export default App;
