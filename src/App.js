import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Button from "./components/button/Button";
import Popup from "./components/Popup/Popup.jsx";
import Backdrop from "./components/Backdrop/Backdrop";
import { createFolder } from "./api/folder.api.js";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
    if (folderName) {
      createFolder(folderName);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Exercise</div>
        <img src={logo} className="App-logo" alt="Logo" />
      </header>
      <div className="button_container">
        <Button text="תיקייה חדשה" handleOnClick={openPopup} />
        <Button text="העלאת קובץ חדש" />
      </div>
      {isOpen && (
        <>
          <Backdrop onCancel={closePopup} />
          <Popup
            handleOnClose={closePopup}
            title="איזה שם קובץ אתה רוצה להוסיף ?"
            setFolderName={setFolderName}
          />
        </>
      )}
    </div>
  );
}

export default App;
