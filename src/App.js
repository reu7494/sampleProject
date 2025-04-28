import { recipes } from "./data.js";

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <div key={id}>
        <h2>{name}</h2>
        <ul>
          <li>{ingredients}</li>
        </ul>
      </div>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <Recipe
        id={recipes.id}
        name={recipes.name}
        ingredients={recipes.ingredients}
      />
    </div>
  );
}
