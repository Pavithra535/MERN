import { useContext } from "react";
import { ResultPublish } from "../CoE";
const StudentResults=()=>{//pass res argument
    const result = useContext(ResultPublish);
    return(
        <div>
            <h1>Result:</h1>
            <h2>SGPA:{result.sgpa}</h2>
            <h3>CGPA:{result.cgpa}</h3>
        </div>
    );
};
export default StudentResults;