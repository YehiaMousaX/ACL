import "./profileInstructor.css";
import axios from "axios";
import React, {useState} from "react";
import { Link } from 'react-router-dom';

function ProfileInstructorPage() {
  const [formVisible, setFormVisible] = useState();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [bio, setbio] = useState("");
  const [rate, setrate] = useState("");
  const [balance, setbalance] = useState("");
  const [newbio, setnewbio] = useState("");
  const [newemail, setnewemail] = useState("");
  const [emailvalid, setEmailValid] = useState(false);

  function courserate(arr) {
    if (arr.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  const validmail = () => {
    return (
      <div
        className="error"
        style={{
          display: emailvalid ? "" : "none",
        }}>
        <h1>* the email is not valid </h1>
      </div>
    );
  };

  const setprofile = () => {
    if (newemail === "" && newbio === "") {
    } else if (newemail === "" && newbio !== "") {
      setFormVisible(false);
      axios
        .put(
          "http://localhost:8000/instractor/EditProfile",
          {
            id: localStorage.getItem("UserEmail"),
            Email: email,
            Biography: newbio,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((response) => {});
    } else if (isValidEmail(newemail) === false) {
      setEmailValid(true);
    } else {
      if (newbio === "" && newemail !== "") {
        setFormVisible(false);

        axios
          .put(
            "http://localhost:8000/instractor/EditProfile",
            {
              id: localStorage.getItem("UserEmail"),
              Email: newemail,
              Biography: bio,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          )
          .then((response) => {});
      } else {
        setFormVisible(false);
        axios
          .put(
            "http://localhost:8000/instractor/EditProfile",
            {
              id: localStorage.getItem("UserEmail"),
              Email: newemail,
              Biography: newbio,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          )
          .then((response) => {});
      }
    }
  };

  /// get instractor profile
  const getprofile = () => {
    axios
      .post(
        "http://localhost:8000/instractor/MyProfile",
        {
          id: localStorage.getItem("UserEmail"),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        setname(response.data[0]);
        setemail(response.data[1]);
        setbio(response.data[2]);
        setrate(response.data[3]);
        setbalance(response.data[4]);
      });
  };

  const isValidEmail = (email) => {
    // check if the email is a string
    if (typeof email !== "string") {
      return false;
    }

    // check if the email has an '@' symbol and a '.' after it
    if (!email.includes("@") || !email.includes(".")) {
      return false;
    }

    // split the email into two parts: the part before the '@' symbol, and the part after
    const [localPart, domain] = email.split("@");

    // check if the local part is at least one character long and does not contain any spaces
    if (localPart.length === 0 || localPart.includes(" ")) {
      return false;
    }

    // check if the domain is at least two characters long and does not contain any spaces
    if (domain.length < 2 || domain.includes(" ")) {
      return false;
    }

    // if all checks pass, the email is valid
    return true;
  };

  return (

    <> <div className='navbar'>
          <div className='logo'>
              Online Courses
          </div>
          <nav className='item'>
              <ul className='ul'>
                  <li>
                      <Link to='/InstructorLandingPage'>Home</Link>
                  </li>
                  <li>
                      <Link to='/About'>About</Link>
                  </li>
                  <li>
                      <Link to='/Contacts'>Contacts</Link>
                  </li>
              </ul>
              </nav>
              <div className="dropdown">
                  <button className="dropbtn">Instructor
                      <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                      <Link to='/ProfileInstructorPage'>My Profile</Link>
                      <Link to='/'>Logout</Link>
                      <Link to='/instractor/UserShowAllCourse' > All Courses</Link>
                      <Link to='/instractor/createnewcourse' > Create Course</Link>
                      <Link to='/instractor/Addquestion' > Add question for a Course</Link>
                      <Link to='/instractor/instractorchoosecountry' > choose Country </Link>
                      <Link to='/instractor/InstructorCourses' > ViewMyCourses </Link>

                      
                  </div>
              </div>
          
      </div>
    <div className="profile-page">
      
      <div className="messages">{validmail()}</div>

      <p className="text">Name : {name}</p>
      <p className="text">Email : {email} </p>

      <p className="text">Biography : {bio}</p>
      <p className="text">Average rate : {rate}</p>
      <p className="text">My Balance : {balance}</p>


      <button
        id="set"
        className="button"
        variant="contained"
        color="primary"
        onClick={() => setFormVisible(true)}>
        Edit My profile
      </button>

      <button
        id="get"
        className="button"
        onClick={getprofile}
        variant="contained"
        color="primary">
        get my profile
      </button>

      <div>
        <form>
          <label className="label">Enter your New bio :</label>
          <input
            type="text"
            id="newbio"
            className="input"
            value={newbio}
            onChange={(event) => setnewbio(event.target.value)}
          />
          <label className="label">Enter your New Email :</label>
          <input
            type="text"
            id="newemail"
            className="input"
            value={newemail}
            onChange={(event) => setnewemail(event.target.value)}
          />

          <button
            id="sumbit"
            className="button"
            onClick={setprofile}
            variant="contained"
            color="primary">
            Sumbit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default ProfileInstructorPage;
