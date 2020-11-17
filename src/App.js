import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [count, setCount] = useState(0);
  const toggleModal = () => setOpenModal((prevVal) => !prevVal);
  const resetCount = () => setCount(0);
  const afterOpenModal = () => setCount((prevVal) => prevVal + 1);

  return (
    <div className="App">
      <button type="button" className="open" onClick={toggleModal}>
        Open
      </button>
      <button type="button" className="reset" onClick={resetCount}>
        Reset
      </button>

      <Modal
        isOpen={openModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
      >
        {`Modal opened ${count} time${count === 1 ? "" : "s"}`}
        <div className="close">
          <button type="button" onClick={toggleModal}>
            Close Modal
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
