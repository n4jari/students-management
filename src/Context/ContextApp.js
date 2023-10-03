import { createContext } from "react";

export const ContextApp = createContext({
  loading: false,
  setLoading: () => {},
  majors: [],
  students: [],
  setStudents: () => {},
  createSubmitForm: () => {},
  confirm: () => {},
  filteredStudent: [],
  setFilteredStudent: () => {},
  search: () => {},
  filter: () => {},
});
