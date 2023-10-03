import { Student } from "../index";
import { useContext } from "react";
import { ContextApp } from "./../../Context/ContextApp";

import "./Students.css";
import { RED } from "../../Helper/Colors";
const Students = () => {
  const { confirm, filteredStudent } = useContext(ContextApp);
  return (
    <div className="students">
      <div className="container">
        <div className="student">
          {filteredStudent.length > 0 ? (
            filteredStudent.map((student) => (
              <Student
                student={student}
                key={student.id}
                confirm={() => confirm(student.id, student.fullname)}
              />
            ))
          ) : (
            <div>
              <p style={{color:RED}}>Non found student .. </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Students;
