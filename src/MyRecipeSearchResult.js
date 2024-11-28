import React from "react";
import "./RecipeSearchresult.css";
import { FaLeaf, FaFireAlt } from "react-icons/fa";

const MyRecipeSearchResult = ({
  recipeinfoLabel,
  recipeinfoImage,
  recipeInfoCalories,
  recipeinfoIngr,
}) => {
  return (
    <div className="recipeContainer">
      <div className="recipeCard">
        <img
          src={recipeinfoImage}
          alt={`${recipeinfoLabel} image`}
          className="recipeImage"
        />
        <div className="recipeDetails">
          <h2 className="recipeTitle">{recipeinfoLabel}</h2>
          <div className="caloriesSection">
            <FaFireAlt className="icon" />
            <p className="caloriesText">{recipeInfoCalories.toFixed()} Calories</p>
          </div>
          <h3 className="ingredientsHeading">
            <FaLeaf className="icon" /> Ingredients
          </h3>
          <ul className="ingredientsList">
            {recipeinfoIngr.slice(0, 5).map((ingredient, index) => (
              <li key={index} className="ingredientItem">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyRecipeSearchResult;
