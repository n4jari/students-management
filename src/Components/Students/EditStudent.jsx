import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CURRENTLINE, RED, ORANGE, COMMENT } from "../../Helper/Colors";
import { ContextApp } from "./../../Context/ContextApp";
import { StudentSchema } from "./../../Validate/StudentValidate";
import { getStudent, updateStudent } from "../../Service/StudentService";
import { useImmer } from "use-immer";
import { Spinner } from "../";
import "./EditStudent.css";

const EditStudent = () => {
  const { majors, setStudents, setFilteredStudent, setLoading, loading } =
    useContext(ContextApp);
  const { studentId } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useImmer({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await getStudent(studentId);
        setStudent(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const editSubmitForm = async (values) => {
    setLoading(true);

    const { status, data } = await updateStudent(values, studentId);

    if (status === 200) {
      setStudents((draft) => {
        const studentIndex = draft.findIndex(
          (s) => s.id === parseInt(studentId)
        );
        draft[studentIndex] = { ...data };
      });

      setFilteredStudent((draft) => {
        const studentIndex = draft.findIndex(
          (s) => s.id === parseInt(studentId)
        );
        draft[studentIndex] = { ...data };
      });
      navigate("/");
      setLoading(false);
    }
  };

  return (
    <div className="editStudent">
      <div className="container">
        {loading ? (
          <Spinner />
        ) : (
          <Formik
            initialValues={student}
            validationSchema={StudentSchema}
            onSubmit={(values) => {
              editSubmitForm(values);
            }}
          >
            <Form style={{ backgroundColor: CURRENTLINE }}>
              <div className="title" style={{ color: ORANGE }}>
                Edit Student
              </div>
              <div>
                <label>
                  <i className="fa fa-user" />{" "}
                </label>
                <Field type="text" name="fullname" placeholder="Fullname" />
              </div>
              <div>
                <label>
                  <i className="fa fa-photo" />{" "}
                </label>
                <Field type="text" name="photo" placeholder="Photo url link" />
              </div>
              <div>
                <label>
                  <i className="fa fa-university" />{" "}
                </label>
                <Field type="text" name="university" placeholder="Univercity" />
              </div>
              <div>
                <label>
                  <i className="fa fa-phone" />{" "}
                </label>
                <Field type="number" name="mobile" placeholder="Phone number" />
              </div>
              <div>
                <label>
                  <i className="fa fa-inbox" />{" "}
                </label>
                <Field type="email" name="email" placeholder="Email" />
              </div>
              <div>
                <label>
                  <i className="fa fa-calendar" />{" "}
                </label>
                <Field type="date" name="birth" />
              </div>
              <div>
                <label>
                  <i className="fa fa-id-card" />{" "}
                </label>
                <Field type="number" name="idCard" placeholder="ID card" />
              </div>
              <div>
                <label>
                  <i className="fa fa-book" />
                </label>{" "}
                <Field as="select" type="text" name="major">
                  <option value="">Take a major</option>
                  {majors.map((m) => (
                    <option value={m.name} key={m.id}>
                      {m.name}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="btn">
                <Link to="/" style={{ backgroundColor: RED }}>
                  Cansel
                </Link>

                <input
                  type="submit"
                  value="Change"
                  style={{ backgroundColor: COMMENT }}
                />
              </div>{" "}
              <ErrorMessage
                name="fullname"
                render={(msg) => (
                  <div className="error" style={{ color: RED }}>
                    {msg}
                  </div>
                )}
              />
              <ErrorMessage
                name="photo"
                render={(msg) => (
                  <div className="error" style={{ color: RED }}>
                    {msg}
                  </div>
                )}
              />
              <ErrorMessage
                name="university"
                render={(msg) => (
                  <div className="error" style={{ color: RED }}>
                    {msg}
                  </div>
                )}
              />
              <ErrorMessage
                name="mobile"
                render={(msg) => (
                  <div className="error" style={{ color: RED }}>
                    {msg}
                  </div>
                )}
              />
              <ErrorMessage
                name="email"
                render={(msg) => (
                  <div className="error" style={{ color: RED }}>
                    {msg}
                  </div>
                )}
              />
              <ErrorMessage
                name="idCard"
                render={(msg) => (
                  <div className="error" style={{ color: RED }}>
                    {msg}
                  </div>
                )}
              />
              <ErrorMessage
                name="major"
                render={(msg) => (
                  <div className="error" style={{ color: RED }}>
                    {msg}
                  </div>
                )}
              />
            </Form>
          </Formik>
        )}
      </div>
    </div>
  );
};

export default EditStudent;
