import { recipes } from "./data.js";

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <ul>
          <li key={id}>{ingredients}</li>
        </ul>
      </div>
    </div>
  );
}

export default function RecipeList() {
  const recipe = recipes;
  return (
    <div>
      <h1>Recipes</h1>
      <Recipe
        id={recipe.id}
        name={recipe.name}
        ingredients={recipe.ingredients}
      />
    </div>
  );
}
