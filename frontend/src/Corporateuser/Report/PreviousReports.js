import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PreviousReports.css';
import { Link } from 'react-router-dom';

function PreviousProblems() {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState('');
  const email = "" + localStorage.getItem('UserEmail');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:8000/user/previous-reports", { Email: email });
        console.log(`report found: ${JSON.stringify(response)}`);
        setReports(response.data.reports);
        
      } catch (err) {
        setError(err.response.data.error);
      }
    };
    fetchData();
  }, []);

  const handleFollowUp = async (reportId) => {
    try {
      const response = await axios.put(`http://localhost:8000/user/follow-up/${reportId}`);
      setReports(prevReports => prevReports.map(report => (
        report._id === reportId ? response.data.report : report
      )))
    } catch (err) {
      setError(err.response.data.error);
    }
  }

  if (error) {
    return <div className="error">{error}</div>;
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
    <div className="previous-reports-container">
      <h2>Previous Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            <p>Course ID: {report.courseId}</p>
            <p>Type of User: {report.typeoftheUser}</p>
            <p>Type of Problem: {report.typeoftheProblem}</p>
            <p>Description: {report.description}</p>
            <p>Status: {report.status}</p>
            { report.status !== "solved" ? <button onClick={() => handleFollowUp(report._id)}>Follow Up</button> : null}
          </li>
        ))}
      </ul>
    </div> </>
  );
};

export default PreviousProblems;
