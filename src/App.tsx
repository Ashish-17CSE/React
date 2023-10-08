// import Message from "./Message";

import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  // return <div> <Message></Message></div>;
  let items = ["Patna", "Gaya", "Ara", "Arwal", "Aurangabad"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        <br></br>
      </div>
      <div>
        <Alert>Hello world</Alert>
      </div>
    </div>
  );
}

export default App;
