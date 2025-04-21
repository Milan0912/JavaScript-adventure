import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pop.css'
const LevelCompletionPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {
      showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>You have completed this level!</h2>
            <button onClick={closePopup} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelCompletionPopup;
