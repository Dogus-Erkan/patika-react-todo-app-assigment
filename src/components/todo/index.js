import React from "react";
import { useState, useEffect } from "react";
import ToDoList from "./list";
import Header from "./header";

import Info from "../info";

const ToDo = () => {
  const [toDoList, setToDoList] = useState([]);

  //Listenin güncel durumu loglanarak kontrol edilir
  useEffect(() => {
    console.log(toDoList);
  }, [toDoList]);

  return (
    <>
      <section className="todoapp">
        <Header toDoList={toDoList} setToDoList={setToDoList} />
        <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
      </section>
      <Info />
    </>
  );
};

export default ToDo;
