import * as yup from "yup";
export const initialValues = {
  username: "",
  email: "",
  password: "",
};

export const basicSchema = yup.object().shape({
  username: yup.string().required("UserName is Required"),
  email: yup
    .string()
    .email("Please Enter Valid Email Id")
    .required("Email is Required"),
  password: yup.string().min(6).required("Password is Required"),
});
