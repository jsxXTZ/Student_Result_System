import { useEffect, useState } from "react"
import { fetchingResultsList } from "./api/ResultsService"


function ResultsListComponent() {
  const[message, setMessage] = useState(null)
  const[results,setResults] = useState([])

  useEffect (
    () => {
      handleSubmit()
    }, []
  )

    function handleSubmit(){

      fetchingResultsList()
            .then((response) => successResponse(response))
            .catch((error) => errorResponse(error))
            .finally(()=> console.log('cleanup'))
  }

  function successResponse(response){
    setResults(response.data)
    setMessage('Results List')
}

function errorResponse(response){
    console.log(response)
    
}

    return (
    <div className="container">
        <h1>Results Lists</h1>

        <div className="text-info">{message}</div>
            
            <div>
                <table className="table">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Student</th>
                        <th>Score</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        results.map(
                          result => (
                                <tr key={result.courseName}>
                                  <td>{result.courseName}</td>
                                    <td>{result.studentName}</td>
                                    <td>{result.score}</td>
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

export default ResultsListComponent
