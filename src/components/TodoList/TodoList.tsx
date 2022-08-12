import React, { useCallback, useEffect } from "react";
import style from "components/TodoList/TodoList.module.scss";
import { RadioButton } from "components/UI/RadioButton/RadioButton";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import {
  changeFilterValue,
  showAllTask,
  showInProgressTask,
  showOnlyCompleted,
} from "store/reducesrs/todos/TodoSlice";
import { fetchTodos } from "store/reducesrs/todos/actionCreators";
import { TodoItem } from "components/TodoItem/TodoItem";
import { Message } from "components/UI/Message/Message";
export const TodoList = () => {
  const dispatch = useAppDispatch();
  const radioButtonChangeHandler = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      dispatch(changeFilterValue(e.currentTarget.value));
      switch (e.currentTarget.value) {
        case "all":
          dispatch(showAllTask());
          break;
        case "open":
          dispatch(showInProgressTask());
          break;
        case "close":
          dispatch(showOnlyCompleted());
          break;
        default:
          break;
      }
    },
    [dispatch]
  );
  useEffect(() => {
    dispatch(fetchTodos());
    //eslint-disable-next-line
  }, []);
  const { filterData, todos, error } = useAppSelector((state) => state.todoReducer);
  if (error) {
    return (
      <Message
        text={
          "Произошла неизвестная ошибка, попробуйте посетить страницу через некоторое время"
        }
      />
    );
  } else {
    return (
      <div className={style.list}>
        <div className={style.list__head}>
          <h1 className={style.list__title}>Tasks List</h1>
          <div className={style.list__filter}>
            <RadioButton
              name='filter'
              onChange={radioButtonChangeHandler}
              activeFilter={filterData}
              items={[
                {
                  title: "All",
                  value: "all",
                },
                {
                  title: "Opened",
                  value: "open",
                },
                {
                  title: "Closed",
                  value: "close",
                },
              ]}
            />
          </div>
          <div className={style.list__body}>
            {todos.map(({ completed, id, title }) => (
              <div className={style.list__item} key={id}>
                <TodoItem completed={completed} link={`/${id}`} text={title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
