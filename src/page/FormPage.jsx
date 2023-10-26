import { TextField } from "@material-ui/core";
import React from "react";
import "./FormPage.css";
import { useFormik } from "formik";
import { initialValues, basicSchema } from "../utilities";

const FormPage = () => {
  const formikData = useFormik({
    initialValues,
    onSubmit: async (values, actions) => {
      await new Promise((data) => setTimeout(data, 500));
      actions.resetForm();
    },
    validationSchema: basicSchema,
  });

  return (
    <div className="mainContainer">
      <form
        autoComplete="off"
        onSubmit={formikData.handleSubmit}
        className="form"
      >
        <h1>Form</h1>
        <div className="inputBox">
          <label>UserName</label>
          <br />
          <TextField
            className="text"
            type="text"
            name="username"
            id="username"
            value={formikData.values.username}
            onBlur={formikData.handleBlur}
            onChange={formikData.handleChange}
          />
        </div>
        {formikData.errors.username && formikData.touched.username ? (
          <p className="error">{formikData.errors.username}</p>
        ) : (
          ""
        )}
        <div className="inputBox">
          <label>Email</label>
          <br />
          <TextField
            className="text"
            type="email"
            name="email"
            id="email"
            value={formikData.values.email}
            onBlur={formikData.handleBlur}
            onChange={formikData.handleChange}
          />
        </div>
        {formikData.errors.email && formikData.touched.email ? (
          <p className="error">{formikData.errors.email}</p>
        ) : (
          ""
        )}
        <div className="inputBox">
          <label>Password</label>
          <br />
          <TextField
            className="text"
            type="password"
            name="password"
            id="password"
            value={formikData.values.password}
            onBlur={formikData.handleBlur}
            onChange={formikData.handleChange}
          />
        </div>
        {formikData.errors.password && formikData.touched.password ? (
          <p className="error">{formikData.errors.password}</p>
        ) : (
          ""
        )}
        <div className="inputBox">
          <label>Confirm Password</label>
          <br />
          <TextField
            className="text"
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            value={formikData.values.confirmpassword}
            onBlur={formikData.handleBlur}
            onChange={formikData.handleChange}
          />
        </div>
        {formikData.errors.confirmpassword &&
        formikData.touched.confirmpassword ? (
          <p className="error">{formikData.errors.confirmpassword}</p>
        ) : (
          ""
        )}
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
