import React from "react";
import "styles/reset.scss";
import "styles/global.scss";
import style from "App.module.scss";
import { Route, Routes } from "react-router-dom";
import { TodoList } from "components/TodoList/TodoList";
import { Task } from "components/Task/Task";

function App() {
  return (
    <div className={style["app"]}>
      <div className='container'>
        <Routes>
          <Route path='/' element={<TodoList />}></Route>
          <Route path='/:todoId' element={<Task />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
