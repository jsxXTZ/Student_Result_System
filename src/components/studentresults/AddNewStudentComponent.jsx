import { useState } from 'react'
import validator from 'validator'
import { Link } from 'react-router-dom'
import './HomePage.css'
import axios from 'axios'
import { addNewStudentApi } from "./api/StudentService"

function AddNewStudentComponent() {
    const[username, setUsername] = useState('')
    const[familyname, setFamilyname] = useState('')
    const[dateofbirth, setDateofbirth] = useState('')
    const[email, setEmail] = useState('')
    const[showSuccessMessage, setShowSuccessMessage] = useState(false)
    const[showErrorMessage, setShowErrorMessage] = useState(false)
    const[message, setMessage] = useState(null)
    
    const validateEmail = (email) => {
      
        if (validator.isEmail(email)) {
            return true
        } else {
            setEmail('Enter valid Email!')
        }
      }
    
      const validateDate = (value) => {
        
        if (validator.isDate(value) && verifyAge(value)) {
            return true
        } else {
            setDateofbirth('Enter Valid Date!')
        }
      }
    
      const verifyAge = (value) => {
        const currentYear = new Date().getFullYear();
        const year = value.split("-")[0];
        const age = currentYear - year;
        console.log(age)
        if (age < 10) setDateofbirth("Age should be more than 10 years");
    }
      
    
    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }
    
    function handleFamilynameChange(event) {
        console.log(event);
        setFamilyname(event.target.value);
    }
    
    function handleDateofbirthChange(event) {
        console.log(event);
        setDateofbirth(event.target.value);
    }
    
    function handleEmailChange(event) {
        console.log(event);
        setEmail(event.target.value);
    }
    
    function handleSubmit() {
        if(username!=='' && familyname!=='' && dateofbirth!=='' && email!=='' ){
            validateEmail(email)
            validateDate(dateofbirth)
            setShowSuccessMessage(true);
            setShowErrorMessage(false);

            const student = {
                name: username,
                familyName: familyname,
                dob: dateofbirth,
                email: email
            }

            addNewStudentApi(username, student)
            .then(response => {
                successResponse(response)
            })
            .catch(error => errorResponse(error))
        } else {
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    function successResponse(response){
        console.log(response)
        setMessage(response.data)
    }

    function errorResponse(error){
        console.log(error)
        setMessage("Something went wrong")
    }

    function SuccessMessageComponent() {
        if(showSuccessMessage)
            return <div className="successMessage">Authentication success</div>
        return null
    }
    
    function ErrorMessageComponent() {
        if(showErrorMessage)
            return <div className="errorMessage">Authentication failed</div>
        return null
    }
    
        return (
            <div className="AddNewStudent">
                <div className="AddNewStudentForm">
                    <h1>Add New Students</h1>
                    {showSuccessMessage && <div className="successMessage">Authentication success</div>}
                    {showErrorMessage && <div className="errorMessage">Authentication failed, Please check your Credentials</div>}
                    <div> 
                        <label>FirstName:</label>
                        <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div> 
                        <label>FamilyName:</label>
                        <input type="text" name="familyname" value={familyname} onChange={handleFamilynameChange} />
                    </div>
                    <div> 
                        <label>DateOfBirth:</label>
                        <input type="date" name="dateofbirth" value={dateofbirth} onChange={handleDateofbirthChange} />
                    </div>
                    <div> 
                        <label>Email Address:</label>
                        <input type="text" name="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div> 
                        <button type="button" name="submit m-5" onClick={handleSubmit}>submit</button>
                    </div>
                    <div className="text-info">{message}</div>
                </div>
            </div>
        )
    }
    
    
    export default AddNewStudentComponent
    