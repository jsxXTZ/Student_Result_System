export default StudentListings(response){
        const data ={
        
          "student" :[
            {
              "name":"John",
              "last_name":"Doe",
              "age":"25",
              "Occupation":"driver",
            },
            {
              "name":"Jack",
              "last_name":"Brown",
              "age":"24",
              "Occupation":"it"
            },
            {
              "name":"Oliver",
              "last_name":"Black",
      
              "age":"30",
              "Occupation":"cto"
            },
          ]
        }
        
      return (
      <div className="container">
          <h1>Students Lists</h1>
    
          <table className="table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Family Name</td>
                <td>DOB</td>
                <td>Email</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
            <td>{response.data}</td>
              {/*{data.response.data.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.age}</td>
                  <td>{item.Occupation}</td>
                </tr>
              ))}*/}
            </tbody>
          </table>
      </div>
      )
}