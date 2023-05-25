import { useEffect, useState } from "react"
import { deleteCourseApi, fetchingCoursesList } from './api/CourseService'

function CourseListComponent() {
  const[message, setMessage] = useState(null)
  const[deletemessage, setDeletemessage] = useState(null)
  const[courses,setCourses] = useState([])

      useEffect (
        () => {
          handleSubmit()
        }, []
      )
    
        function handleSubmit(){
    
          fetchingCoursesList()
                .then((response) => successResponse(response))
                .catch((error) => errorResponse(error))
                .finally(()=> console.log('cleanup'))
      }
    
      function successResponse(response){
        setCourses(response.data)
        setMessage('Courses List')
    }

    function errorResponse(response){
      console.log(response)
      
  }
  
  function deleteCourse(name) {
    console.log('clicked ' + name)
    deleteCourseApi(name)
    .then(
  
        () => {
          setDeletemessage(`Delete of Course with name = ${name} successful`)
            handleSubmit()
        }
        //1: Display message
        //2: Update Todos list
    )
    .catch(error => console.log(error))
  }
      
    return (
    <div className="container">
        <h1>Courses Lists</h1>

        <div className="text-info">{message}</div>
            <div className="alert alert-warning">{deletemessage}</div>
            
            <div>
                <table className="table">
                    <thead>
                      <tr>
                        <th>Course Name</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        courses.map(
                            course => (
                                <tr key={course.name}>
                                  <td>{course.name}</td>
                                    <td> <button className="btn btn-warning" 
                                                    onClick={() => deleteCourse(course.name)}>Delete</button> </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>

                </table>
            </div>
        
    </div>
    )
}

export default CourseListComponent