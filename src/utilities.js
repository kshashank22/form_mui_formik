import * as yup from "yup";
const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
    .matches(regex,{message:"Please Fill Valid Email Id"})
    .required("Email is Required"),
  password: yup.string().min(6).required("Password is Required"),
});
