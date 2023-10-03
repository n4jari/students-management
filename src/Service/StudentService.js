import axios from "axios";

const SERVER_URL = "https://student-management-app-5z05.onrender.com";

export const getMajors = () => {
  const url = `${SERVER_URL}/majors`;
  return axios.get(url);
};

export const getAllStudents = () => {
  const url = `${SERVER_URL}/students`;
  return axios.get(url);
};

export const getStudent = (studentId) => {
  const url = `${SERVER_URL}/students/${studentId}`;
  return axios.get(url);
};

export const createStudent = (student) => {
  const url = `${SERVER_URL}/students`;
  return axios.post(url, student);
};

export const updateStudent = (student, studentId) => {
  const url = `${SERVER_URL}/students/${studentId}`;
  return axios.put(url, student);
};

export const deleteStudent = (studentId) => {
  const url = `${SERVER_URL}/students/${studentId}`;
  return axios.delete(url);
};
