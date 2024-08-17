// import Message from "./Message";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // return <div> <Message></Message></div>;
  let items = ["Patna", "Gaya", "Ara", "Arwal", "Aurangabad"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertHiden, alertVisible] = useState(false);

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
        {alertHiden && (
          <Alert onClose={() => alertVisible(false)}>My Alert</Alert>
        )}
        <Button
          color="success"
          onClick={() => {
            alertVisible(true);
          }}
        >
          My Button
        </Button>
      </div>
    </div>
  );
}

export default App;
