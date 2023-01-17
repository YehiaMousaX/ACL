import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function RequestAccess({ match }) {
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(`/request-access/${match.params.courseId}`, {
        userId: localStorage.getItem("userId"),
        reason,
      });

      setSuccess(res.data.message);
      setError("");
    } catch (err) {
      setError(err.response.data.error);
      setSuccess("");
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
      <h1>Request Access to Course</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="reason">Reason for Requesting Access:</label>
        <textarea
          id="reason"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        />
        <button type="submit">Send Request</button>
      </form>
      {error && <p>Error: {error}</p>}
      {success && <p>{success}</p>}
    </>
  );
}

export default RequestAccess;
