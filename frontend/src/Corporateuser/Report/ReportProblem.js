import React, { useState } from "react";
import axios from "axios";
import "./ReportProblem.css";

function ReportProblem({ match }) {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a post request to the server to report the problem
      const res = await axios.post("/report-problem/" + match.params.courseId, {
        userId: localStorage.getItem("userId"),
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
    </div>
  );
}

export default ReportProblem;
