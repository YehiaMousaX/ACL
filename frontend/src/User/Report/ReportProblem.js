import React, { useState } from "react";
import axios from "axios";
import "./ReportProblem.css";
import { Link } from 'react-router-dom';

function ReportProblem() {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = "" + localStorage.getItem('UserEmail')
    const courseID = "" + localStorage.getItem('usercourseID5')
    try {

      // Send a post request to the server to report the problem
      const res = await axios.put("http://localhost:8000/Corporateuser/report-problem", {
        Courseid : courseID,
        Email: email,
        type,
        description,
      });

      if (res.data.error) {
        setError(res.data.error);
      } else {
        setSuccess(res.data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Error reporting problem");
    }
  };

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
    <div>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="technical">Technical</option>
            <option value="financial">Financial</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Report Problem</button>
      </form>
    </div> </>
  );
}

export default ReportProblem;
