import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import students from "./students";
import { Link, useNavigate } from "react-router-dom";
function Home() {
let history =useNavigate();

function setID(studentId,studentName,studentAge,studentGender,Interest){

}
function deleted(studentId){

}

return (
    <div style={{}}>
        <Table striped bordered hover size="sm">
            <thead>
                 <th>studentId</th>
                 <th>studentName</th>
                 <th>studenAge</th>
                 <th>studentGender</th>
                 <th>Interest</th>
                 <th>Action</th>
            </thead>
            <tbody>
                {
                    students.map((item) =>{
                    return(
                    <tr>
                        <td>{item.studentId}</td>
                        <td>{item.studentName}</td>
                        <td>{item.studentAge}</td>
                        <td>{item.studentGender}</td>
                        <td>{item.Interest}</td>
                        <td>
                            <Link to={'/edit'}>
                                <Button onClick={(e) => setID(item.studentId,item.studentName,item.studentAge,item.studentGender,item.Interest)}
                                variant="primary"
                                >
                                    Update
                                </Button>
                                <Button onClick={(e) => deleted(item.studentId)}
                                variant="danger"
                                >
                                    Delete
                                </Button>
                            </Link>
                        </td>
                        
                    </tr>
                    )
                    })
                }
                 </tbody>
            </Table><br></br>
            <Link>
                <Button variant="success" size="lg">
                        Add StudentData
                </Button>
            </Link>
        </div>
)
}
export default Home;