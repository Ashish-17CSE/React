// import Message from "./Message";

import ListGroup from "./components/ListGroup";

function App() {
  // return <div> <Message></Message></div>;
  let items = ["Patna", "Gaya", "Ara", "Arwal", "Aurangabad"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
