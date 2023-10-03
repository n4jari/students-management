import { BACKGROUND, COMMENT, FOREGROUND } from "../../Helper/Colors";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: BACKGROUND,
        borderBottom: `1px solid ${COMMENT}`,
      }}
    >
      <h2 style={{ color: FOREGROUND }}>
        <i className="fa fa-graduation-cap" aria-hidden="true" /> Student
        Management App
      </h2>
    </nav>
  );
};

export default Navbar;
