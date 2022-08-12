import React, { memo } from "react";
import style from "components/UI/CheckBox/CheckBox.module.scss";
interface ICheckBox {
  checked?: boolean;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const CheckBox: React.FC<ICheckBox> = memo((props) => {
  const { checked, onChange } = props;
  return (
    <label className={style.checkbox}>
      <input
        type='checkbox'
        className={style.checkbox__input}
        checked={checked}
        onChange={onChange}
      />
      <div className={style.checkbox__mark}>
        <svg
          className={style.checkbox__icon}
          viewBox='0 0 14 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M13.2218 2.1888L11.9585 0.929688L5.90573 7.94944L2.04062 3.74417L0.777344 4.98513L5.90573 10.4098L13.2218 2.1888Z' />
        </svg>
      </div>
    </label>
  );
});
