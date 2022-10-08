import React from "react";
import { useParams } from "react-router-dom";

const View = ({ setList, list }) => {
  const { id } = useParams();
  const view = list.find((el) => String(el.id) === id);
  // el.id는 객체이기에 : useParams에서 id로 받아줌 string으로 바꿔준다!!
  const delTodo = () => {
    setList(list.filter((it) => it.id !== view.id));
  };

  return (
    <div>
      <div>
        <div>{view.title}</div>
        <button>MODIFY</button>
        <button onClick={() => delTodo}>DELETE</button>
        <button onClick={() => {}}></button>
      </div>
    </div>
  );
};

export default View;
