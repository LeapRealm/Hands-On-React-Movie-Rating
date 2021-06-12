import React from "react";

const Food = ({ fav }) => {
  return <h1>I like {fav}</h1>;
};

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
};

export default App;
