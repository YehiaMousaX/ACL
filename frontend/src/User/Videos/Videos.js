import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


function Videos() {

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    const course = localStorage.getItem('Course')

    
      // Send a post request to the server to report the problem
      const res = await axios.get("http://localhost:8000/user/watch", {
        Email: email,
        Courseid : courseID,
        Video: video
      });

      if (res.data.error) {
        setError(res.data.error);
      } else {
        setSuccess(res.data.message);
      }
    } 

   
    const handleDownload = async () => {
      const notes = document.getElementById("note-input").value;
      const res = await axios.post("http://localhost:8000/user/downloadNotes", { Notes: notes}, {responseType: 'blob'});
      const pdfBlob = new Blob([res.data], {type: 'application/pdf'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(pdfBlob);
      link.download = "notes.pdf";
      link.click();
  }
  

  return (

    <><><div className="form">
            <div className='navbar'>
                <div className='logo'>
                    Online Courses
                </div>
                <nav className='item'>
                    <ul className='ul'>
                        <li>
                            <Link to='/corporateuserLandingPage'>Home</Link>
                        </li>
                        <li>
                            <Link to='/About'>About</Link>
                        </li>
                        <li>
                            <Link to='/Contacts'>Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div></>

        
        <h3></h3>
        <h3></h3>


        <div id="container">
      <video src="video.mp4" controls></video>

      <h3>write notes</h3>
      
      <div id="notes">
        <textarea id="note-input"></textarea>
        <button id="submit-button" onClick={handleDownload}>Download Notes</button>
      </div>
    </div> </>
  );
}

export default Videos;
