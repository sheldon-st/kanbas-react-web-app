import JavaScript from "./JavaScript.jsx";
import PathParameters from "./PathParameters.jsx";
import TodoItem from "./todos/TodoItem.jsx";
import TodoList from "./todos/TodoList.jsx";
import Classes from "./Classes/index.jsx";
import Styles from "./Styles/index.jsx";
import ConditionalOutput from "./ConditionalOutput/index.jsx";
import Nav from "../../Nav.jsx";
function Assignment3() {
  return (
    <div>
      <h1>Assignment 3</h1>
      <Nav />
      <ConditionalOutput></ConditionalOutput>
      <Styles></Styles>
      <Classes></Classes>
      <TodoList />
      <TodoItem
        todo={{
          done: true,
          title: "Make Dinner",
          status: "Done",
        }}
      />
      <TodoItem
        todo={{
          done: true,
          title: "pick up kids",
          status: "In Progress",
        }}
      />
      <PathParameters />
      <JavaScript />
    </div>
  );
}

export default Assignment3;
