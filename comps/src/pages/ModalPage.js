import { useState } from "react";
import Model from "../components/Modal";
import Button from "../components/Button";

function ModelPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handelClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handelClose} primary>I Accept</Button>
    </div>
  );

  const model = (
    <Model onClose={handelClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Model>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Model
      </Button>
      {showModal && model}
    </div>
  );
}

export default ModelPage;
