import React, { memo } from "react";
import style from "components/UI/Message/Message.module.scss";
interface IMessage {
  text: string;
}
export const Message: React.FC<IMessage> = memo(({ text }) => {
  return (
    <div className={style.message}>
      <div className='container'>{text}</div>
    </div>
  );
});
