import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlices.js';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <div className="font-bold text-3xl text-center text-underline">Todos</div>
      <ul className="list-none mt-4">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  const newText = prompt('Enter new text:', todo.text);
                  if (newText?.trim()) {
                    dispatch(updateTodo({ id: todo.id, text: newText }));
                  }
                }}
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo({ id: todo.id }))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;

// className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
