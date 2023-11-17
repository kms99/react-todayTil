import React from "react";
import { useSelector } from "react-redux";

const TilList = () => {
  let tilList = useSelector((state) => state.TilList.tilList);
  const selectedDate = useSelector(
    (state) => state.TilList.currentWriteTil.date
  );

  if (selectedDate) {
    tilList = tilList.filter((til) => til.date === selectedDate) || [];
  }
  return (
    <div>
      <ul>
        {tilList.map((til) => {
          return (
            <li key={til.id}>
              <p>{til.date}</p>
              <h2>{til.title}</h2>
              <p>{til.context}</p>
              <p>{til.tilCondition}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TilList;
