function ListGroup() {
  const items = ["Patna", "Gaya", "Ara", "Arwal", "Aurangabad"];
  return (
    // import { Fragment } from "react";
    // If add empty angle brackets "<>" we're telling react to use fragment
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
