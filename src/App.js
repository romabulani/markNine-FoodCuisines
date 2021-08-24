import { useState } from "react";
import "./styles.css";
var foodDatabase = {
  Indian: [
    {
      name: "Biryani",
      ingredients: "Rice, Dried Fruits, Spices, Vegetables"
    },
    {
      name: "Aloo Paratha",
      ingredients: "Potatoes, Flour, Ghee, Spices"
    },
    {
      name: "Paneer Butter Masala",
      ingredients: "Paneer, Dried fruits, Coriander, Spices"
    },
    {
      name: "Chhole Bature",
      ingredients: "Potatoes, Onions, Chana, Spices"
    },
    { name: "Idli Sambhar", ingredients: "Rice, Dal, Tomato, Spices" }
  ],

  Chinese: [
    {
      name: "Manchurian",
      ingredients: "Soya Sauce, Onions, Spices, Vegetables"
    },
    {
      name: "Noodles",
      ingredients: "Noodles, Sauces, Cabbage, Carrot"
    },
    {
      name: "Chicken Lollipops",
      ingredients: "Chicken Wings, Eggs, Oil, Spices"
    },
    {
      name: "Tofu",
      ingredients: "Black Bean, Soya Sauce, Onions, Spices"
    },
    {
      name: "Cantonese Chinese Soup",
      ingredients: "Chicken, Green Veggies, Spring Onions, Mushrooms"
    }
  ],

  Italian: [
    {
      name: "Pizza",
      ingredients: "Cheese, Baking powder, Olive Oil, Vegetables"
    },
    {
      name: "Pasta",
      ingredients: "Pasta, Garlic, Olive Oil, Pepper"
    },
    {
      name: "Tiramisu",
      ingredients: "Eggs, Sugar, Cheese, Cocoa powder"
    },
    {
      name: "Spaghetti",
      ingredients: "Spaghetti, Mushrooms, Eggs, Spices"
    },
    {
      name: "Garlic Bread",
      ingredients: "French Bread, Butter, Black pepper, Garlic Paste"
    }
  ]
};
var cuisines = Object.keys(foodDatabase);

export default function App() {
  var [cuisine, setCuisine] = useState("Indian");

  function onClickHandler(cuisine) {
    setCuisine(cuisine);
  }
  return (
    <div className="App">
      <h1>🍽️ Good Food, Good Mood</h1>
      <div>
        Are you foodie just like me? Check out the most famous dishes of the top
        cuisines in the world!
      </div>
      {cuisines.map(function (cuisine) {
        return (
          <button
            style={{
              padding: "1rem",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "inline-block",
              border: "solid 1px black",
              margin: "1rem",
              backgroundColor: "#D3D3D3",
              borderRadius: "1rem",
              fontFamily: "Courgette, cursive"
            }}
            onClick={() => onClickHandler(cuisine)}
          >
            {cuisine}
          </button>
        );
      })}
      <hr></hr>
      <div style={{ textAlign: "left", width: "50%" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {foodDatabase[cuisine].map((nameOfCuisine) => (
            <li
              key={nameOfCuisine.name}
              style={{
                listStyle: "none",
                border: "1px black solid",
                padding: "1rem",
                width: "100%",
                borderRadius: "1rem",
                backgroundColor: "#D3D3D3",
                margin: "1rem 40%"
              }}
            >
              <div>{nameOfCuisine.name}</div>
              <hr></hr>
              <div style={{ fontSize: "0.8rem" }}>
                Ingredients : {nameOfCuisine.ingredients}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
