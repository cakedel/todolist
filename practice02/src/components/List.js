import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const List = ({ list }) => {
  const { id } = useParams();
  return (
    <div>
      <ul>
        {list.map((el) => {
          return (
            <li key={el.id}>
              <Link to={"/view/" + el.id}>{el.title}</Link>
            </li>
          );
        })}
        <button onClick={() => console.log(list[id].id)}>list</button>
      </ul>
    </div>
  );
};

export default List;
