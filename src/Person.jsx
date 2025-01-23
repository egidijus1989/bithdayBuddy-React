import React from "react";

const Person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image} alt="" className="img" />
      <div>
        <h4>{name}</h4>
        <h4>{age}</h4>
      </div>
    </article>
  );
};

export default Person;
