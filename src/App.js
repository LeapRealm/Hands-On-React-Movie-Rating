import React from "react";
import PropTypes from "prop-types";

const Food = ({ name, picture, rating }) => {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Samgyeopsal-gui.jpg/1200px-Samgyeopsal-gui.jpg",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://simplycook.imgix.net/recipes/Bibimbap-_720x480.jpg?dpr=1&fit=crop&fm=jpg&h=1000&ixlib=php-1.0.6&lossless=0&q=50&w=1200&s=683b3a92e878ee9cdb83e0ed1a98597c",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media4.fl.yelpcdn.com/bphoto/anesu6IAyAj2d6r19eFqEg/o.jpg",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://www.maangchi.com/wp-content/uploads/2013/09/kimbap.jpg",
    rating: 4.9,
  },
];

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
