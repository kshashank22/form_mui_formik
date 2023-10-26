import * as yup from "yup";
const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
export const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmpassword: "",
};

export const basicSchema = yup.object().shape({
  username: yup.string().min(3).required("UserName is Required"),
  email: yup
    .string()
    .email("Please Enter Valid Email Id")
    .matches(emailregex, { message: "Please Fill Valid Email Id" })
    .required("Email is Required"),
  password: yup
    .string()
    .min(6)
    .matches(passwordregex, { message: "Please Fill Valid Password" })
    .required("Password is Required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must be match")
    .required("Confirm Password is Required"),
});
