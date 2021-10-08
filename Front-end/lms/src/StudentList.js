import { throttle } from "lodash";
import {React} from 'react';


function StudentList(students)
{
    return(
        <table>
            <thead>
                <tr><td>Name</td>
                <td>Email</td></tr>
            </thead>
            <tbody>
                {students.map(e => {
                    <tr>
                        <td>e.Name</td>
                        <td>e.Email</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
export default StudentList