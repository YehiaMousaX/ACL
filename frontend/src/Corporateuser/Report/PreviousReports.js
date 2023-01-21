import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PreviousReports.css";
import { Link } from 'react-router-dom';

function PreviousProblems() {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const Email = "" + localStorage.getItem('UserEmail');
    // Send a get request to the server to retrieve the user's previous problems
    axios.post('http://localhost:8000/user/previous-reports', { Email: Email})
    .then((res) => {
      setReports(res.data)  
    }).catch((err) => console.log(err)); 
  
   }
  
    
  , []);

  return (
    
    <div>
      {error && <p>{error}</p>}
        <table>
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Type</th>
              <th>Description</th>
              <th>Status</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {reports.forEach((report) => {
              return (
                <tr >
                  <td>{report.courseId}</td>
                  <td>{report.type}</td>
                  <td>{report.description}</td>
                  <td>{report.status}</td>
                  <td>{report.createdAt}</td>
                </tr>
              )
            })}

          </tbody>
        </table>

    </div> 
  );
}

export default PreviousProblems;
