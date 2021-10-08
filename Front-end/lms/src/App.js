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

  return (
    <div className="App">
       <table border ="1" className="table table-hover">
            <thead>
                <tr><th>Name</th>
                <th>Email</th></tr>
            </thead>
            <tbody>
                {studentList.map((student , index) =>
                {
                  return <tr>
                    <td key={index}>{student.Name}</td>
                    <td>{student.Email}</td>
                  </tr>
                 
                })}
            </tbody>
        </table>
    </div>
  );
}

export default App;
