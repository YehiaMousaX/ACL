import axios from 'axios';
import React, { useState } from 'react';
import  "./signup.css"
import IconButton from "@mui/material/IconButton";

function SignUpForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [bornIn, setBornIn] = useState('');
  const [martialStatus, setMartialStatus] = useState("Single");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [job, setJob] = useState('');
  const [gender, setGender] = useState("male");
  const [passwordconfirm, setPasswordConfirm] = useState('');
  const [country, setCountry] = useState("Afghanistan");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errormail, setErrorMail] = useState(false);
  const [errorpassword, setErrorPassword] = useState(false);
  const [errorconfirmpassword, setErrorConfirmPassword] = useState(false);
  const [emailFound, setEmailFound] = useState(true);

  const [emailvalid, setEmailValid] = useState(false);

  
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };


  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>* Please enter all the fields*</h1>
      
      
    </div>
    );
  };


  const errorconfirpassword = () => {
    return (
      <div
      className="error"
      style={{
        display: errorconfirmpassword ? '' : 'none',
      }}>
      <h1>* the two passwords are not the same *</h1>
    </div>
    );
  };


  const errorpasssword = () => {
    return (
      <div
      className="error"
      style={{
        display: errorpassword ? '' : 'none',
      }}>
      <h1>*the passwod must be at least length of 8 and atleast character and upper character and special characters like this ["!@#$%^&*()_+-=[]{}|;':\"] *</h1>
    </div>
    );
  };


  const erroremail = () => {
    return (
      <div
      className="error"
      style={{
        display: errormail ? '' : 'none',
      }}>
      <h1>* the email is already signedin use another email or sign in with this mail</h1>
    </div>
    );
  };


  const validmail = () => {
    return (
      <div
      className="error"
      style={{
        display: emailvalid ? '' : 'none',
      }}>
      <h1>* the email is not valid </h1>
    </div>
    );
  };
  
  function isStrongPassword(password) {
    // Minimum length for a strong password is 8 characters
    if (password.length < 8) {
      return false;
    }
  
    // Check if the password contains at least one lowercase letter, one uppercase letter, and one number
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= 'a' && password[i] <= 'z') {
        hasLowerCase = true;
      } else if (password[i] >= 'A' && password[i] <= 'Z') {
        hasUpperCase = true;
      } else if (password[i] >= '0' && password[i] <= '9') {
        hasNumber = true;
      }
    }
    if (!hasLowerCase || !hasUpperCase || !hasNumber) {
      return false;
    }
  
    // Check if the password contains any special characters
    let specialCharacters = "!@#$%^&*()_+-=[]{}|;':\"";
    let hasSpecialCharacter = false;
    for (let i = 0; i < password.length; i++) {
      if (specialCharacters.indexOf(password[i]) !== -1) {
        hasSpecialCharacter = true;
        break;
      }
    }
    if (!hasSpecialCharacter) {
      return false;
    }
  
    return true;
  }
  
// check email is valid or not 

  const isValidEmail = (email) => {
    // check if the email is a string
    if (typeof email !== 'string') {
      return false;
    }
  
    // check if the email has an '@' symbol and a '.' after it
    if (!email.includes('@') || !email.includes('.')) {
      return false;
    }
  
    // split the email into two parts: the part before the '@' symbol, and the part after
    const [localPart, domain] = email.split('@');
  
    // check if the local part is at least one character long and does not contain any spaces
    if (localPart.length === 0 || localPart.includes(' ')) {
      return false;
    }
  
    // check if the domain is at least two characters long and does not contain any spaces
    if (domain.length < 2 || domain.includes(' ')) {
      return false;
    }
  
    // if all checks pass, the email is valid
    return true;
  }
  



  

 


 
  const  handleSubmit = e => {

   
    axios.post('http://localhost:8000/user/checkemail', { Email: Email })
      .then(response => {
        setEmailFound( response.data );
      })
      .catch(error => {
        console.error(error);
      });


    if (name === '' || Email === '' || password === '' || age === ''|| bornIn === ''|| passwordconfirm === ''|| job === ''|| phoneNumber === ''|| martialStatus === '') {
      setError(true); 
      setErrorConfirmPassword(false);
      setErrorPassword(false)
      setSubmitted(false);
      setErrorMail (false);


    }
    
    else if (password!== passwordconfirm) {
      setErrorConfirmPassword(true);
      setErrorPassword(false)
      setError(false); 
      setSubmitted(false);
      setErrorMail (false);


    } 
    else if (isStrongPassword(password) === false) {
      setErrorConfirmPassword(false);
      setError(false); 
      setErrorPassword(true)
      setSubmitted(false);
      setErrorMail (false);

    }
    else if (emailFound === true){
     setErrorMail (true);
     setSubmitted(false);
     setError(false);
     setErrorConfirmPassword(false);
     setErrorPassword(false)
    }
    else if (isValidEmail(Email) === false) {
      setErrorMail (false);
      setSubmitted(false);
      setError(false);
      setErrorConfirmPassword(false);
      setErrorPassword(false)
      setEmailValid(true)



    }
    else {
    setSubmitted(true);
    setError(false);
    setErrorConfirmPassword(false);
    setErrorPassword(false)
    setErrorMail (false);
    setEmailValid(false)

    
     
    axios.post('http://localhost:8000/user/signup', {
      Name: name,
      password: password,
      Email: Email,
      Age: age,
      BornIn: bornIn,
      MartialStatus: martialStatus,
      PhoneNumber: phoneNumber,
      Job: job ,
      Gender: gender,
      Country : country
  } ,{
          headers: {
          'Content-Type': "application/json",
          'Accept': "application/json",
          } 
    } )
    .then((response) => {

    })
    .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }
  }
  

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
        {errorconfirpassword()}
        {errorpasssword()}
        {erroremail()}
        {validmail()}
      </div>

      <div className="form1">

      <label className="label">Name:</label>
      <input
        type="text"
        id="name"
        className="input"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label className="label">Password:</label>
      <input
        type="password"
        id="password-input"
        className="input"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
      <label  className="label">PasswordConfirm:</label>
      <input
        type="password"
        id="passwordconfirm"
        className="input"
        value={passwordconfirm}
        onChange={(event) => setPasswordConfirm(event.target.value)}
      />

    
      <label className="label">Email:</label>
      <input
        type="email"
        id="email"
        className="input"
        value={Email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label className="label">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        className="input"
        onChange={(event) => setAge(event.target.value)}
      />
      <label className="label">Born in:</label>
      <input
        type="text"
        id="bornIn"
        className="input"
        value={bornIn}
        onChange={(event) => setBornIn(event.target.value)}
      />
      <label className="label">Martial status:</label>
      <select
        type="text"
        id="martialStatus"
        className="input"
        value={martialStatus}
        onChange={(event) => setMartialStatus(event.target.value)}
      >
         <option value="single">Single</option>
         <option value="married">Married</option>
         <option value="divorced">Divorced</option>
        </select>
      <label className="label">Phone number:</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phoneNumber}
        className="input"
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <label className="label">Job:</label>
      <input
        type="text"
        id="job"
        className="input"
        value={job}
        onChange={(event) => setJob(event.target.value)}
      />
     
      <label className="label">Gender:</label>
      <select
        type="text"
        id="gender"
        className="input"
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option value="male">male</option>
         <option value="female">female</option>

        </select>

      <label className="label">Country:</label>
      <select
        type="text"
        id="Country"
        className="input"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      >
         <option value="Afghanistan">Afghanistan</option>
      <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antarctica">Antarctica</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>      
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas (the)">Bahamas (the)</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia (Plurinational State of)">Bolivia (Plurinational State of)</option>
<option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Bouvet Island">Bouvet Island</option>
<option value="Brazil">Brazil</option>
<option value="British Indian Ocean Territory (the)">British Indian Ocean Territory (the)</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cabo Verde">Cabo Verde</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cayman Islands (the)">Cayman Islands (the)</option>    
<option value="Central African Republic (the)">Central African Republic (the)</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Christmas Island">Christmas Island</option>
<option value="Cocos (Keeling) Islands (the)">Cocos (Keeling) Islands (the)</option>
<option value="Colombia">Colombia</option>
<option value="Comoros (the)">Comoros (the)</option>
<option value="Congo (the Democratic Republic of the)">Congo (the Democratic Republic of the)</option>
<option value="Congo (the)">Congo (the)</option>
<option value="Cook Islands (the)">Cook Islands (the)</option>        
<option value="Costa Rica">Costa Rica</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Curaçao">Curaçao</option>
<option value="Cyprus">Cyprus</option>
<option value="Czechia">Czechia</option>
<option value="Côte dIvoire">Côte dIvoire</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic (the)">Dominican Republic (the)</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Eswatini">Eswatini</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Falkland Islands (the) [Malvinas]">Falkland Islands (the) [Malvinas]</option>
<option value="Faroe Islands (the)">Faroe Islands (the)</option>      
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="French Guiana">French Guiana</option>
<option value="French Polynesia">French Polynesia</option>
<option value="French Southern Territories (the)">French Southern Territories (the)</option>
<option value="Gabon">Gabon</option>
<option value="Gambia (the)">Gambia (the)</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guernsey">Guernsey</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
<option value="Holy See (the)">Holy See (the)</option>
<option value="Honduras">Honduras</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran (Islamic Republic of)">Iran (Islamic Republic of)</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Isle of Man">Isle of Man</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jersey">Jersey</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Korea (the Democratic Peoples Republic of)">Korea (the Democratic People"s Republic of)</option>
<option value="Korea (the Republic of)">Korea (the Republic of)</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Lao Peoples Democratic Republic (the)">Lao People"s Democratic Republic (the)</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libya">Libya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macao">Macao</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands (the)">Marshall Islands (the)</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia (Federated States of)">Micronesia (Federated States of)</option>
<option value="Moldova (the Republic of)">Moldova (the Republic of)</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montenegro">Montenegro</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands (the)">Netherlands (the)</option>
<option value="New Caledonia">New Caledonia</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger (the)">Niger (the)</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk Island">Norfolk Island</option>
<option value="Northern Mariana Islands (the)">Northern Mariana Islands (the)</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Palestine, State of">Palestine, State of</option>      
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines (the)">Philippines (the)</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Republic of North Macedonia">Republic of North Macedonia</option>
<option value="Romania">Romania</option>
<option value="Russian Federation (the)">Russian Federation (the)</option>
<option value="Rwanda">Rwanda</option>
<option value="Réunion">Réunion</option>
<option value="Saint Barthélemy">Saint Barthélemy</option>
<option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>  
<option value="Saint Lucia">Saint Lucia</option>
<option value="Saint Martin (French part)">Saint Martin (French part)</option>
<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
<option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option>  
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Serbia">Serbia</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra Leone">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
<option value="South Sudan">South Sudan</option>
<option value="Spain">Spain</option>
<option value="Sri Lanka">Sri Lanka</option>
<option value="Sudan (the)">Sudan (the)</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syrian Arab Republic">Syrian Arab Republic</option>    
<option value="Taiwan">Taiwan</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
<option value="Thailand">Thailand</option>
<option value="Timor-Leste">Timor-Leste</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>      
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks and Caicos Islands (the)">Turks and Caicos Islands (the)</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates (the)">United Arab Emirates (the)</option>
<option value="United Kingdom of Great Britain and Northern Ireland (the)">United Kingdom of Great Britain and Northern Ireland (the)</option>
<option value="United States Minor Outlying Islands (the)">United States Minor Outlying Islands (the)</option>
<option value="United States of America (the)">United States of America (the)</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela (Bolivarian Republic of)">Venezuela (Bolivarian Republic of)</option>
<option value="Viet Nam">Viet Nam</option>
<option value="Virgin Islands (British)">Virgin Islands (British)</option>
<option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>  
<option value="Wallis and Futuna">Wallis and Futuna</option>
<option value="Western Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
<option value="Åland Islands">Åland Islands</option><option value="Albania">Albania</option>


        </select>


      <button id = "signup" className="btn" type="submit" onClick={handleSubmit} variant="contained" color="primary">Sign up</button>
       
      
</div>
</div>

  );
}

export default SignUpForm;



