// import Message from "./Message";

import ListGroup from "./components/ListGroup";

function App() {
  // return <div> <Message></Message></div>;
  let items = ["Patna", "Gaya", "Ara", "Arwal", "Aurangabad"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
