import { useState } from 'react'
import './HomePage.css'
import { addNewCourseApi } from './api/CourseService'

function AddNewCourseComponent() {
    const[coursename, setCoursename] = useState('')
    const[showSuccessMessage, setShowSuccessMessage] = useState(false)
    const[showErrorMessage, setShowErrorMessage] = useState(false)
    const[message, setMessage] = useState(null)

    function handleCoursenameChange(event) {
        setCoursename(event.target.value);
    }

    function handleSubmit() {
        if(coursename!==''){
            setShowSuccessMessage(true);
            setShowErrorMessage(false);

            const course = {
                name: coursename
            }

            addNewCourseApi(coursename, course)
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
    }

    return (
        <div className="AddNewCourses">
            <div className="AddNewCourseForm">
                <h1>Add New Courses</h1>
                {showSuccessMessage && <div className="successMessage">Course added successfully</div>}
                {showErrorMessage && <div className="errorMessage">Course addition failed, Please try again</div>}
                <div> 
                    <label>CourseName:</label>
                    <input type="text" name="coursename" value={coursename} onChange={handleCoursenameChange} />
                </div>
                <div> 
                    <button type="button" name="submit" onClick={handleSubmit}>submit</button>
                </div>
                <div className="text-info">{message}</div>
            </div>
        </div>
    )
}

export default AddNewCourseComponent

