import { useEffect, useState } from "react";
import "./App.css";
import MyRecipeSearchResult from "./MyRecipeSearchResult";

function App() {
  const MY_ID = "a2efd5d7";
  const MY_TOKEN = "21d5c8b3e5e37144089649a12a721140";

  const [mySearch, setmySearch] = useState("");
  const [myRecipe, setmyRecipe] = useState([]);
  const [searchButton, setsearchButton] = useState("");

  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchButton}&app_id=${MY_ID}&app_key=${MY_TOKEN}`
      );
      const data = await response.json();
      setmyRecipe(data.hits);
    };
    if (searchButton) getAPI(); 
  }, [searchButton]);

  const getInput = (e) => {
    setmySearch(e.target.value);
  };

  const finalsearch = (e) => {
    e.preventDefault();
    setsearchButton(mySearch);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Find a Recipe</h1>
      </div>
      <div className="container">
        <form className="searchForm" onSubmit={finalsearch}>
          <input
            className="searchInput"
            type="text"
            placeholder="Search for a recipe..."
            onChange={getInput}
            value={mySearch}
          />
          <button type="submit" className="searchButton">
            <img
              src="https://img.icons8.com/fluency/48/000000/fry.png"
              alt="search icon"
            />
          </button>
        </form>
      </div>
      <div className="recipesGrid">
        {myRecipe.map((item, index) => (
          <MyRecipeSearchResult
            key={index}
            recipeinfoLabel={item.recipe.label}
            recipeinfoImage={item.recipe.image}
            recipeInfoCalories={item.recipe.calories}
            recipeinfoIngr={item.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
