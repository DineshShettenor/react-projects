import React from "react";

const TodoList = ({ todoList, handleEdit, handleDelete }) => {
  console.log(todoList);

  return (
    <>
      {todoList &&
        todoList.map((item, index) => (
          <div key={index} className="list-container">
            <h3>{item}</h3>
            <div>
              {/* <button onClick={() => handleEdit(item)}>Edit</button> */}
              <button onClick={() => handleDelete(item)} className="btn btn-delete">Delete</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default TodoList;
