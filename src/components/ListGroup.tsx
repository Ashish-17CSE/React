function ListGroup() {
  let items = ["Patna", "Gaya", "Ara", "Arwal", "Aurangabad"];
  items = [];

  const getMessage = () => {
    // return items.length === 0 ? <p>No item found</p> : null;

    return items.length === 0 && <p>No item found</p>;
  };

  return (
    // import { Fragment } from "react";
    // If add empty angle brackets "<>" we're telling react to use fragment
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
