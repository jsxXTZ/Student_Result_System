import { useState } from 'react'
import './HomePage.css'
import { addNewResultApi } from "./api/ResultsService"

function AddNewResultsComponent() {
    const[coursename, setCoursename] = useState('')
    const[studentname, setStudentname] = useState('')
    const[score, setScore] = useState('')
    const[showSuccessMessage, setShowSuccessMessage] = useState(false)
    const[showErrorMessage, setShowErrorMessage] = useState(false)
    const[message, setMessage] = useState(null)
    
    function handleCoursenameChange(event) {
        setCoursename(event.target.value);
    }
    
    function handleStudentnameChange(event) {
        setStudentname(event.target.value);
    }
    
    function handleScoreChange(event) {
        setScore(event.target.value);
    }
    
    function handleSubmit() {
        if(coursename!=='' && studentname!=='' && score!==''){
            setShowSuccessMessage(true);
            setShowErrorMessage(false);

            const results = {
                courseName: coursename,
                studentName: studentname,
                score: score
            }

            addNewResultApi(coursename, results)
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
    
        return (
            <div className="AddNewResults">
                <div className="AddNewResultsForm">
                    <h1>Add New Results</h1>
                    {showSuccessMessage && <div className="successMessage">Results Added successfully</div>}
                    {showErrorMessage && <div className="errorMessage">Result addition failed, Try again</div>}
                    <div> 
                        <label>CourseName:</label>
                        <input type="text" name="coursename" value={coursename} onChange={handleCoursenameChange} />
                    </div>
                    <div> 
                        <label>StudentName:</label>
                        <input type="text" name="studentname" value={studentname} onChange={handleStudentnameChange} />
                    </div>
                    <div> 
                        <label>Score:</label>
                        <input type="text" name="score" value={score} onChange={handleScoreChange} />
                    </div>
                    <div> 
                        <button type="button" name="submit" onClick={handleSubmit}>submit</button>
                    </div>
                    <div className="text-info">{message}</div>
                </div>
            </div>
        )
}

export default AddNewResultsComponent