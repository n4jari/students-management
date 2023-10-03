import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CURRENTLINE, RED, ORANGE, COMMENT } from "../../Helper/Colors";
import { ContextApp } from "./../../Context/ContextApp";
import "./AddStudent.css";
import { StudentSchema } from "./../../Validate/StudentValidate";

const AddStudent = () => {
  const { majors, createSubmitForm } = useContext(ContextApp);
  return (
    <div className="addStudent">
      <div className="container">
        <Formik
          initialValues={{
            fullname: "",
            photo: "",
            university: "",
            mobile: "",
            email: "",
            birth: "",
            idCard: "",
            major: "",
          }}
          validationSchema={StudentSchema}
          onSubmit={(values) => {
            createSubmitForm(values);
          }}
        >
          <Form style={{ backgroundColor: CURRENTLINE }}>
            <div className="title" style={{ color: ORANGE }}>
              Add Student
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
              <Field as="select" type="text" name="major" placeholder="ID card">
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

              <Field
                type="submit"
                name="submit"
                value="Create"
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
      </div>
    </div>
  );
};

export default AddStudent;
