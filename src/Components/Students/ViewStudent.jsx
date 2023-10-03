import { useState, useEffect } from "react";
import { getStudent } from "../../Service/StudentService";
import { Link, useParams } from "react-router-dom";
import { CURRENTLINE, CYAN, FOREGROUND, RED } from "../../Helper/Colors";
import { Spinner } from "../";
import "./ViewStudent.css";
const ViewStudent = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: studentData } = await getStudent(studentId);
        setStudent(studentData);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="viewStudent">
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div
            className="card"
            style={{ backgroundColor: CURRENTLINE, color: CYAN }}
          >
            <img src={student.photo} alt={student.fullname} />
            <div className="card_body">
              <p>
                <span>
                  <i className="fa fa-user" />
                </span>
                <span>{student.fullname}</span>
              </p>
              <p>
                <span>
                  <i className="fa fa-university" />
                </span>
                <span>{student.university}</span>
              </p>
              <p>
                <span>
                  <i className="fa fa-phone" />
                </span>
                <span>{student.mobile}</span>
              </p>

              <p>
                <span>
                  <i className="fa fa-inbox" />
                </span>
                <span>{student.email}</span>
              </p>

              <p>
                <span>
                  <i className="fa fa-calendar" />
                </span>
                <span>{student.birth}</span>
              </p>
              <p>
                <span>
                  <i className="fa fa-id-card" />
                </span>
                <span>{student.idCard}</span>
              </p>
              <p>
                <span>
                  <i className="fa fa-book" />
                </span>
                <span>{student.major}</span>
              </p>
              <p>
                <Link
                  to="/"
                  style={{ backgroundColor: RED, color: FOREGROUND }}
                >
                  Back
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewStudent;
