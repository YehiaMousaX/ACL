import axios from 'axios';
import React, { useState } from 'react';
import  "./signup.css"

const  countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
];

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
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  const  handleSubmit = e => {
    if (name === '' || Email === '' || password === '' || age === ''|| bornIn === ''|| passwordconfirm === ''|| job === ''|| phoneNumber === ''|| martialStatus === '') {
      setError(true);
      
          
      
      
    }
    else {
    setSubmitted(true);
    setError(false);
     
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
      alert("successful sign up ");
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
        id="password"
        className="input"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <label className="label">PasswordConfirm:</label>
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
      <button id = "login "className="btn" type="submit" >Go To Login Page</button>
       
      <form id="sign-up-form">
      <div>
  <a href="#" id="view-policy-link">View refund/payment policy</a>
  </div>
  <label>
    <input type="checkbox" id="accept-policy-checkbox" required/>
    I have read and accept the refund/payment policy
  </label>

</form>

<div id="policy-modal" class="modal">
  <div class="modal-content">
    <h2>Refund/Payment Policy</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vivamus lacinia ultricies metus, sit amet tincidunt est pellentesque id.
      Praesent quis ornare ligula. Vestibulum eget nulla eu tellus placerat bibendum.
      Etiam elementum, metus a vehicula posuere, sem lacus porttitor lacus,
      eget vehicula sem ipsum at nisi. Suspendisse potenti.
    </p>
    <p>
      Curabitur id lectus at nibh ullamcorper dignissim.
      Aenean eget ligula ac ligula placerat vestibulum.
      Sed venenatis dolor et sapien mollis, vel fermentum justo sollicitudin.
      Aenean id est at leo suscipit aliquet. Maecenas auctor, nisl quis luctus vehicula,
      turpis lectus feugiat ligula, a pulvinar lacus elit sit amet elit.
    </p>
    <button id="close-modal-button">Close</button>
  </div>
</div>
</div>
</div>

  );
}

export default SignUpForm;



