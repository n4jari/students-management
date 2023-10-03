import { useContext } from "react";
import { ContextApp } from "./../../Context/ContextApp";

import "./Filter.css";
import { BACKGROUND, COMMENT, FOREGROUND } from "./../../Helper/Colors";
import { Link } from "react-router-dom";

const Filter = () => {
  const { majors, search, filter } = useContext(ContextApp);

  return (
    <div className="filter" style={{ backgroundColor: COMMENT }}>
      <div className="container">
        <div className="addBtn">
          <Link
            to="add"
            style={{
              backgroundColor: BACKGROUND,
              color: FOREGROUND,
            }}
          >
            <i className="fa fa-vcard" /> Add Student
          </Link>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search fullname"
            onChange={(event) => search(event.target.value)}
          />
        </div>
        <div className="major">
          <i className="fa fa-filter" style={{ color: FOREGROUND }} />{" "}
          <select onChange={(event) => filter(event.target.value)}>
            <option value="">Filter</option>
            {majors.map((m) => (
              <option value={m.name} key={m.id}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
