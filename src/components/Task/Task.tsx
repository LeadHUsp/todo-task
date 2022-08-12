import React, { useEffect } from "react";
import style from "components/Task/Task.module.scss";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { fetchTodos } from "store/reducesrs/todos/actionCreators";
import { CheckBox } from "components/UI/CheckBox/CheckBox";
import { Message } from "components/UI/Message/Message";
export const Task = () => {
  const dispatch = useAppDispatch();
  const { todoId } = useParams<{ todoId: string }>();
  const { todosHashTable } = useAppSelector((state) => state.todoReducer);
  let currentTask;
  useEffect(() => {
    if (!todosHashTable) {
      dispatch(fetchTodos());
    }
    //eslint-disable-next-line
  }, []);

  if (todosHashTable && todoId) {
    currentTask = todosHashTable[todoId];
  }
  if (currentTask) {
    return (
      <div className={style.task}>
        <div className={style.task__head}>
          <div className={style.task__title}>Task #{currentTask.id}</div>
          <Link to={"/"} className={style.task__link}>
            Back to Task List
          </Link>
        </div>
        <div className={style.task__body}>{currentTask.title}</div>
        <div className={style.task__footer}>
          <CheckBox checked={currentTask.completed} />
          <span className={style.task__info}>opened</span>
        </div>
      </div>
    );
  } else {
    return (
      <Message
        text={
          "Произошла неизвестная ошибка, попробуйте посетить страницу через некоторое время"
        }
      />
    );
  }
};
