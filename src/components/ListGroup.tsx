import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["Patna", "Gaya", "Ara", "Arwal", "Aurangabad"];

  // Hook
  const [selectedIndex, SetSelectedIndex] = useState(-1);

  const getMessage = () => {
    // return items.length === 0 ? <p>No item found</p> : null;
    return items.length === 0 && <p>No item found</p>;
  };

  // Event handler
  const hendleClick = (event: MouseEvent) => console.log("Clicked");

  return (
    // import { Fragment } from "react";
    // If add empty angle brackets "<>" we're telling react to use fragment
    <>
      <h1>List</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              SetSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
