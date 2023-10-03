import { Link } from "react-router-dom";
import {
  CURRENTLINE,
  CYAN,
  FOREGROUND,
  ORANGE,
  RED,
} from "../../Helper/Colors";
import "./Student.css";
const Student = ({ student, confirm }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: CURRENTLINE,
        color: FOREGROUND,
      }}
    >
      <div className="photo">
        <img src={student.photo} alt={student.name} />
      </div>

      <div className="content">
        <p>
          <span>Fullname : </span>
          <span>{student.fullname}</span>
        </p>
        <p>
          <span>Univercity : </span>
          <span>{student.university}</span>
        </p>
        <p>
          <span>Major : </span>
          <span>{student.major}</span>
        </p>
        <p>
          <span>Birth : </span> <span>{student.birth}</span>
        </p>
        <p>
          <span>ID Card : </span>
          <span>{student.idCard}</span>
        </p>
      </div>
      <div className="btn">
        <Link to={`/view/${student.id}`} style={{ background: CYAN }}>
          <i className="fa fa-eye" />
        </Link>
        <Link to={`/edit/${student.id}`} style={{ background: ORANGE }}>
          <i className="fa fa-edit" />
        </Link>
        <button onClick={confirm} style={{ background: RED }}>
          <i className="fa fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default Student;
