import React, { memo } from "react";
import style from "components/TodoItem/TodoItem.module.scss";
import { CheckBox } from "components/UI/CheckBox/CheckBox";
import { Link } from "react-router-dom";

interface ITodoItem {
  completed: boolean;
  text: string;
  link: string;
}

export const TodoItem: React.FC<ITodoItem> = memo((props) => {
  const { completed, text, link } = props;
  return (
    <div className={`${style.item} ${completed && style.item_completed}`}>
      <div className={style.item__checkbox}>
        <CheckBox checked={completed} />
      </div>
      <Link to={link} className={style.item__link}>
        {text}
      </Link>
    </div>
  );
});
