import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  AddStudent,
  EditStudent,
  Filter,
  Navbar,
  Students,
  ViewStudent,
} from "./Components";
import { ContextApp } from "./Context/ContextApp";
import { useImmer } from "use-immer";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getMajors,
} from "./Service/StudentService";
import { confirmAlert } from "react-confirm-alert";
import "./ConfirmDelete.css";
import {
  BACKGROUND,
  COMMENT,
  CURRENTLINE,
  FOREGROUND,
  PURPLE,
  RED,
} from "./Helper/Colors";
import _, { constant } from "lodash";
const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [majors, setMajors] = useState([]);
  const [students, setStudents] = useImmer([]);
  const [filteredStudent, setFilteredStudent] = useImmer([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: majorsData } = await getMajors();
        const { data: studentsData } = await getAllStudents();

        setMajors(majorsData);
        setStudents(studentsData);
        setFilteredStudent(studentsData);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //CREATE student
  const createSubmitForm = async (values) => {
    try {
      setLoading(true);

      const { status, data } = await createStudent(values);
      if (status === 201) {
        setStudents((draft) => {
          draft.push(data);
        });
        setFilteredStudent((draft) => {
          draft.push(data);
        });
        navigate("/");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  //DELETE student
  const removeStudent = async (contactId) => {
    try {
      setLoading(true);

      const studentsBackup = [...students];
      const { status } = await deleteStudent(contactId);
      setStudents((draft) => draft.filter((s) => s.id !== contactId));
      setFilteredStudent((draft) => draft.filter((s) => s.id !== contactId));

      setLoading(false);

      if (status !== 200) {
        setStudents(studentsBackup);
      }
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  const confirm = (studentId, fullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            className="confirm_alert"
            style={{ background: PURPLE, border: `1px solid ${BACKGROUND}` }}
          >
            <h2>Delete the student!</h2>
            <p>
              Would you like to delete student with name of{" "}
              <span style={{ color: CURRENTLINE }}>{fullname}</span>?
            </p>

            <div className="btn">
              <button
                onClick={onClose}
                style={{
                  background: COMMENT,
                  color: FOREGROUND,
                  border: `2px solid ${BACKGROUND}`,
                }}
              >
                No
              </button>

              <button
                style={{
                  background: RED,
                  color: FOREGROUND,
                  border: `2px solid ${BACKGROUND}`,
                }}
                onClick={() => {
                  removeStudent(studentId, fullname);
                  onClose();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        );
      },
    });
  };

  //SEARCH student
  const search = _.debounce((query) => {
    const allStudents = students.filter((s) => {
      return s.fullname.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredStudent(allStudents);
  }, 400);

  //FILTER student
  const filter = _.debounce((query) => {
    const allStudents = students.filter((s) => {
      return s.major.includes(query);
    });
    setFilteredStudent(allStudents);
  }, 400);

  return (
    <ContextApp.Provider
      value={{
        loading,
        setLoading,
        majors,
        students,
        setStudents,
        createSubmitForm,
        confirm,
        filteredStudent,
        setFilteredStudent,
        search,
        filter,
      }}
    >
      <Navbar />
      {location.pathname === "/" ? <Filter /> : null}
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/view/:studentId" element={<ViewStudent />} />
        <Route path="/edit/:studentId" element={<EditStudent />} />
      </Routes>
    </ContextApp.Provider>
  );
};

export default App;
