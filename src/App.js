import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function ListItems({ people, title }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist"
  );

  return (
    <article>
      <h1>Scientists</h1>
      <ListItems people={chemists} title="Chemists" />
      <ListItems people={everyoneElse} title="EveryoneElse" />
    </article>
  );
}
