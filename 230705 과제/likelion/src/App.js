import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./component/TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [idValue, setIdvalue] = useState(0);
  const [selectedTag, setSelectedTag] = useState("공부");

  const changeInputHandler = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const addListHandler = () => {
    setTodoList([
      ...todoList,
      {
        id: idValue,
        data: inputValue,
        searched: false,
        tag: selectedTag,
      },
    ]);
    setInputValue("");
    setIdvalue((prev) => prev + 1);
  };

  const removeListHandler = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  const searchListHandler = () => {
    const newTodoList = todoList.map((item) => {
      if (inputValue === "") {
        return {
          ...item,
          searched: false,
        };
      } else if (item.data.includes(inputValue) || item.tag === "inputValue") {
        return {
          ...item,
          searched: true,
        };
      } else {
        return {
          ...item,
          searched: false,
        };
      }
    });
    setTodoList(newTodoList);
  };

  const changeTagHandler = (event) => {
    const value = event.target.value;
    setSelectedTag(value);
  };

  useEffect(() => {}, []);

  return (
    <div className="container">
      <p>명언</p>
      <h1>TodoList</h1>
      <div>
        <input
          onChange={changeTagHandler}
          type="radio"
          name="tag"
          value="공부"
          checked={selectedTag === "공부"}
        />
        공부
        <input
          onChange={changeTagHandler}
          type="radio"
          name="tag"
          value="할일"
          checked={selectedTag === "할일"}
        />
        할일
        <input
          onChange={changeTagHandler}
          type="radio"
          name="tag"
          value="살것"
          checked={selectedTag === "살것"}
        />
        살것
      </div>
      <input
        className="inputBar"
        type="text"
        onChange={changeInputHandler}
        value={inputValue}
      />
      <button className="add-button" onClick={addListHandler}>
        추가
      </button>
      <button className="search-button" onClick={searchListHandler}>
        검색
      </button>

      <TodoList removeListHandler={removeListHandler} todoList={todoList} />
    </div>
  );
}

export default App;
