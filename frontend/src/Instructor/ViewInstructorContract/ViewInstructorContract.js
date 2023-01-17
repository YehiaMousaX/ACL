import React, { useState } from 'react';
import './ViewInstructorContract.css';

const ViewInstructorContract = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleAccept = () => {
    // Code to handle the user accepting the contract
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick}>View</button>
      {isOpen && (
        <div>
          <p>
            This contract grants the company the right to use, copy, display, perform, distribute and create derivative works from any and all videos and materials that user posts or uploads to any website or platform owned or controlled by Company. 
            The user represents and warrants that they are the sole owner of the materials or has the necessary rights to grant the rights and indemnify the company in case of any breach of representations and warranties 
            The company will take 15% of total income.
          </p>

          <a href="/InstructorLandingPage">
          <button onClick={handleAccept}>I Accept</button>
          </a>
         
        </div>
      )}
    </div>
  );
};

export default ViewInstructorContract;