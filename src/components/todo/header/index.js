import React from "react";
import { useState } from "react";

const Header = ({ toDoList, setToDoList }) => {
  const [inputChange, setInputChange] = useState({ toDoLabel: "", toDoCompleteStatus: false });

  //Input alanı değiştiğinde form alanının değerini inputChange objesine kaydeder
  const onChangeInput = (e) => {
    setInputChange({ ...inputChange, [e.target.name]: e.target.value });
  };

  //Inputtaki veriyi toDoListe kaydeder ve inputu temizler
  const saveToDo = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, inputChange]);
    setInputChange({ toDoLabel: "", toDoCompleteStatus: false });
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={saveToDo}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={onChangeInput}
            name="toDoLabel"
            value={inputChange.toDoLabel}
          />
        </form>
      </header>
    </div>
  );
};

export default Header;
