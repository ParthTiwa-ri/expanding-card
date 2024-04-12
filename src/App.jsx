import { useState } from "react";
import "./App.css";
import Homelist from "./components/Homelist";
import Modal from "./components/Modal";
import { homeData } from "./data/data";

function App() {
  const [modalData, setModalData] = useState(null);
  const [isDataChanged, setIsDataChanged] = useState(false);

  function handleOpenPopup(data) {
    setModalData(data);
    setIsDataChanged(false);
  }

  function handleClosePopup() {
    setModalData(null);
  }

  function handleChangeData() {
    setIsDataChanged(true);
  }

  return (
    <div className="container">
      {homeData.map((item) => (
        <Homelist key={item.id} data={item} onClick={handleOpenPopup} />
      ))}
      {modalData && (
        <Modal
          data={modalData}
          onClose={handleClosePopup}
          isDataChanged={isDataChanged}
          onChangeData={handleChangeData}
        />
      )}
    </div>
  );
}

export default App;
