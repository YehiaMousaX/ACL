import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PreviousReports.css";

function PreviousProblems({ match }) {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Send a get request to the server to retrieve the user's previous problems
        const res = await axios.get("/previous-problems/" + match.params.id);

        if (res.data.error) {
          setError(res.data.error);
        } else {
          setReports(res.data.reports);
        }
      } catch (err) {
        console.error(err);
        setError("Error retrieving previous problems");
      }
    };
    fetchData();
  }, [match.params.id]);

  return (
    <div>
      {error && <p>{error}</p>}
      {reports.length > 0 ? (
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
            {reports.map((report) => (
              <tr key={report._id}>
                <td>{report.courseId}</td>
                <td>{report.type}</td>
                <td>{report.description}</td>
                <td>{report.status}</td>
                <td>{report.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No previous problems found</p>
      )}
    </div>
  );
}

export default PreviousProblems;
