import React from "react";
import AddRedux from "./AddRedux";

import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";
import CounterRedux from "./CounterReducer";

const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <TodoList />
      <AddRedux />
      <CounterRedux />
      <HelloRedux />
    </div>
  );
};

export default ReduxExamples;
