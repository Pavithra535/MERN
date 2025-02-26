// import StudentResults from "./StudentResult";
import { createContext } from "react";
import StudentResult from "./ContextAPI/StudentResult";
export const ResultPublish = createContext()
const CoE = () =>{    //pass res as argument
    return(
         //div tag
         <ResultPublish.Provider value = {{sgpa:"10 SGPA",cgpa:"10 CGPA"}}>
            <h1>Results published</h1>
            <StudentResult></StudentResult>
         </ResultPublish.Provider>
            //<StudentResults sgpa={res.sgpa} cgpa={res.cgpa}></StudentResults>
    )
}
export default CoE;