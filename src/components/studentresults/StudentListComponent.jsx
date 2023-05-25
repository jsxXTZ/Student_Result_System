import axios from "axios"
import { useEffect, useState } from "react"
import { fetchingStudentsList, deleteStudentApi } from "./api/StudentService"

export default function StudentListComponent() {
  const[message, setMessage] = useState(null)
  const[deletemessage, setDeletemessage] = useState(null)
  const[students,setStudents] = useState([])

  useEffect (
    () => {
      handleSubmit()
    }, []
  )

    function handleSubmit(){

      fetchingStudentsList()
            .then((response) => successResponse(response))
            .catch((error) => errorResponse(error))
            .finally(()=> console.log('cleanup'))
  }

  function successResponse(response){
    setStudents(response.data)
    setMessage('Students List')
}

function errorResponse(response){
    console.log(response)
    
}

function deleteStudent(name) {
  console.log('clicked ' + name)
  deleteStudentApi(name)
  .then(

      () => {
        setDeletemessage(`Delete of Students with name = ${name} successful`)
          handleSubmit()
      }
      //1: Display message
      //2: Update Todos list
  )
  .catch(error => console.log(error))
}

  return (
    <div className="StudentList">
      <h2>Below is the Students list maintained by us.</h2>
            {/*<div> 
                <button type="button" name="submit m-5" onClick={handleSubmit}>Student Lists</button>
  </div>*/}
            <div className="text-info">{message}</div>
            <div className="alert alert-warning">{deletemessage}</div>
            
            <div>
                <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Family Name</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        students.map(
                            student => (
                                <tr key={student.name}>
                                    <td>{student.name}</td>
                                    <td>{student.familyName}</td>
                                    <td>{student.dob}</td>
                                    <td>{student.email}</td>
                                    <td> <button className="btn btn-warning" 
                                                    onClick={() => deleteStudent(student.name)}>Delete</button> </td>
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
