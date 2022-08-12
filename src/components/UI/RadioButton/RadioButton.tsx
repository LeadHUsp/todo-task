import React, { memo } from "react";
import style from "components/UI/RadioButton/RadioButton.module.scss";

interface IValues {
  title: string;
  value: string;
}

interface IRadioButton {
  name: string;
  items: IValues[];
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  activeFilter: string;
}

export const RadioButton: React.FC<IRadioButton> = memo((props) => {
  const { name, items, onChange, activeFilter } = props;
  return (
    <div className={style.radio}>
      {items.length > 0 &&
        items.map((item) => (
          <label
            className={`${style.radio__item} ${
              activeFilter === item.value && style.radio__item_active
            }`}
            key={item.value}>
            {item.title}

            <input
              type='radio'
              name={name}
              checked={activeFilter === item.value}
              value={item.value}
              onChange={onChange}
            />
          </label>
        ))}
    </div>
  );
});
