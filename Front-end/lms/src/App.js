import logo from './logo.svg';
import './App.css';
import { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from './StudentList.js';

function App() {
  const [studentList , setStudents] = useState([]);
 
  useEffect(() => {
    const getStudents = () => 
  {
      console.log('getting students')
     fetch('http://localhost:3001/Students').then((response) => response.json()).then((data => 
      {
          setStudents(data)
          console.log(studentList)
      }));
  }
    getStudents()
  } , [])

  const addStudent = async () => 
  {

  }
  return (
    <div className="App">
       <div className="container">
        <div className="form col-lg-6">
            <form action="http://localhost:3001/Students" method="post" id="form" onSubmit={addStudent}> 
              <div className="col-lg-5" >
              <input type="text" name="Name" className="form-control" placeholder="Name" />
              </div>
              <br />
              <div className="col-lg-5" >
              <input type="text" name="Email" className="form-control" placeholder="Email" />
              </div>
              <div>
              <input type="submit" value="Add" className="btn btn-success btn-sm" />
              </div>
            
            </form>
            
        </div>
    </div>
    <br />
    <br />
       <table border ="1" className="table table-hover">
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Created Date</th>
                  <th>Updated Date</th>
                </tr>
            </thead>
            <tbody>
                {studentList.map((student , index) =>
                {
                  return <tr>
                    <td key={index}>{student.Name}</td>
                    <td>{student.Email}</td>
                    <td>{student.createdAt}</td>
                    <td>{student.updatedAt}</td>
                  </tr>
                 
                })}
            </tbody>
        </table>
    </div>
  );
}

export default App;
