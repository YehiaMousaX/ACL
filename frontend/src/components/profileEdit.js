
import './profileInstructor.css';
import axios from 'axios';
import React, {  useState } from 'react';







function EditProfilePage  () { 

    const [newbio, setnewbio] = useState("");
    const [newemail, setnewemail] = useState("");
    const [emailvalid, setEmailValid] = useState(false);

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
      
      
      const setprofile = () => {
    
        if (newbio ==="" && newemail !== ""){
    
          if (isValidEmail(newemail) === false) {
          
            setEmailValid(true)
            setFormVisible(true)
    
      
      
          }
          else {
            setFormVisible(false)
    
          axios.put('http://localhost:8000/instractor/EditProfile', {
            id :"639631378ff4438d6677a4b3",
            Email : newemail ,
            Biography :bio
            
        } ,{
                headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
                } 
          } )
          .then((response) => {
    
          });
        
        }
      }
    
        else if (newemail ==="" && newbio !=="") {
          axios.put('http://localhost:8000/instractor/EditProfile', {
            id :"639631378ff4438d6677a4b3",
            Email : email ,
            Biography :newbio
            
        } ,{
                headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
                } 
          } )
          .then((response) => {
    
          });
        }
    
        else if (newemail ==="" && newbio ===""){
          
         
            setFormVisible(false)
            axios.put('http://localhost:8000/instractor/EditProfile', {
            id :"639631378ff4438d6677a4b3",
            Email : email ,
            Biography :bio
            
        } ,{
                headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
                } 
          } )
          .then((response) => {
    
          });
        }
      
        else {
       
         if (isValidEmail(newemail) === false) {
          
          setEmailValid(true)
          setFormVisible(true)
    
    
    
        }
       else {
        setFormVisible(false)
          axios.put('http://localhost:8000/instractor/EditProfile', {
            id :"639631378ff4438d6677a4b3",
            Email : newemail ,
            Biography :newbio
            
        } ,{
                headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
                } 
          } )
          .then((response) => {
    
          });
    
        }
        }
        }




return (
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

 
<button id = "sumbit" className="button"  onClick= {setprofile } variant="contained" color="primary">Sumbit</button>

</form>
)

}

export default EditProfilePage;
