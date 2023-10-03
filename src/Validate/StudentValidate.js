import * as Yup from "yup";

export const StudentSchema = Yup.object().shape({
  fullname: Yup.string().required(),
  photo: Yup.string().url().required(),
  university: Yup.string().required(),
  mobile: Yup.number().required(),
  email: Yup.string().email().required(),
  birth: Yup.date().required(),
  idCard: Yup.number().required(),
  major: Yup.string().required(),
});
