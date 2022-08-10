import React from "react";

const Form = ({ setInputTxt, inputTxt, todos, setTodos, setStatus }) => {
  const inputHandle = (e) => {
    // console.log(e.target.value);
    setInputTxt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setInput("");
    setTodos([
      ...todos,
      { text: inputTxt, completed: false, id: Math.random() * 10000 },
    ]);
    setInputTxt("");
  };

  const handleStatus = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        onChange={inputHandle}
        value={inputTxt}
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={handleStatus}>
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
