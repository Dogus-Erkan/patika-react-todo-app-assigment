import React, { useState } from 'react'

const ToDoList = ({ toDoList, setToDoList }) => {

  const [selectedFilterId, setSelectedFilterId] = useState("all");

  // Checkboxa tıklayarak todo listteki itemi tikler
  const checkboxClick = (itemIndex) => {
    setToDoList(
      toDoList.map((item, index) => {
        if (itemIndex === index) {
          return {
            ...item,
            toDoCompleteStatus: !item.toDoCompleteStatus
          };
        }
        return item;
      })
    );
  }

  //Kaç tane to do list elemenı olduğunu sayar
  const itemCount = toDoList.length;

  const handleFilterChange = (filterId) => {
    setSelectedFilterId(filterId);
  };

  //Seçili filtreleme tipine göre filtreleme yapar
  const filteredToDoList = toDoList.filter((item) => {
    if (selectedFilterId === "all") {
      return true;
    } else if (selectedFilterId === "active") {
      return !item.toDoCompleteStatus;
    } else if (selectedFilterId === "completed") {
      return item.toDoCompleteStatus;
    }
    return "";
  });

  //Listedeki bütün elemenların checkboxlarını tikler
  const toggleAllItems = () => {
    const allCompleted = toDoList.every((item) => item.toDoCompleteStatus);
    setToDoList(
      toDoList.map((item) => {
        return { ...item, toDoCompleteStatus: !allCompleted };
      })
    );
  }

  //Listedeki elemanları filtreler silinecek indexli elemanı filtre dışında bırakıp yeni liste oluşturulur
  const deleteItem = (itemIndex) => {
    const filteredItemDelete = toDoList.filter((item, index) => index !== itemIndex);
    setToDoList(filteredItemDelete);
  }

  //listedeki elemanlardan toDoCompleteStatus değeri false olanlar filtelenir ve yeni liste oluşturulur
  const clearCompleted = () => {
    const filteredCompleted = toDoList.filter((item, index) => item.toDoCompleteStatus === false)
    setToDoList(filteredCompleted);
  }

  return (
    <>
      <section className="main">
        <input className="toggle-all" onClick={() => toggleAllItems()} type="checkbox" />
        <label htmlFor="toggle-all" onClick={() => toggleAllItems()}>Mark all as complete</label>

        <ul className="todo-list">
          {filteredToDoList.map((item, index) => {
            return (
              <li key={index} className={item.toDoCompleteStatus ? "completed" : "view"}>
                <div className="view">
                  <input className="toggle" onChange={() => checkboxClick(index)} type="checkbox" checked={item.toDoCompleteStatus} />
                  <label>{item.toDoLabel}</label>
                  <button onClick={() => deleteItem(index)} className="destroy"></button>
                </div>
              </li>
            );
          })}

        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>{itemCount} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/"
              className={selectedFilterId === "all" ? "selected" : ""}
              onClick={() => handleFilterChange("all")}>All</a>
          </li>
          <li>
            <a href="#/"
              className={selectedFilterId === "active" ? "selected" : ""}
              onClick={() => handleFilterChange("active")}>Active</a>
          </li>
          <li>
            <a href="#/"
              className={selectedFilterId === "completed" ? "selected" : ""}
              onClick={() => setSelectedFilterId("completed")}>Completed</a>
          </li>
        </ul>

        <button onClick={() => clearCompleted()} className="clear-completed">Clear completed</button>
      </footer>
    </>
  )
}

export default ToDoList