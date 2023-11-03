import React, { FC } from "react";
import Add from "./Add";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { Provider } from "react-redux";
import store from "./store";

export const Assignment4: FC = () => {
  function sayHello() {
    alert("Hello");
  }

  return (
    <Provider store={store}>
      <div className="container">
        <h1>Assignment 4</h1>
        <ReduxExamples />
        <ParentStateComponent />
        <ArrayStateVariable />
        <ObjectStateVariable />
        <DateStateVariable />
        <StringStateVariables />
        <BooleanStateVariables />
        <Counter />
        <EventObject />
        <PassingFunctions theFunction={sayHello} />
        <PassingDataOnEvent />
        <ClickEvent />
        <Add a={23} b={19} />
      </div>
    </Provider>
  );
};
export default Assignment4;
