import { Button, Container, TextField, Typography } from "@material-ui/core";
import React, { useCallback, memo } from "react";
import Header from "../../Component/Header";
import useStyle from "./style";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {useDispatch} from 'react-redux'
import { signIn } from "../../redux/action/user";

const validationSchema =  yup.object().shape({
	taiKhoan: yup.string().required("This field is required"),
	matKhau: yup.string().required("This field is required")
})

function Signin(props) {
  const classes = useStyle();
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema,
    validateOnMount:true,
  });
  const setAllTouched = useCallback(() =>{
	  Object.keys(formik.values).forEach((key)=>{
		  formik.setFieldTouched(key);
	  })
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTouched()
    // console.log(formik.errors);
    // console.log(formik.values)
//     Formik luôn luôn true 
// Object luôn luôn true
if(!formik.isValid) return;
//     console.log(formik.touched)
	dispatch(signIn(formik.values, goToHome))
  };
  const goToHome = () =>{
	  props.history.push("/")
  }
  return (
    <div>
      <Header />
      <Typography className="mt-5 mb-5" variant="h3" align="center">
        Đăng nhập
      </Typography>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <div className={classes.marginBotton}>
            <TextField
              name="taiKhoan"
	      onChange={formik.handleChange}
	      onBlur={formik.handleBlur}
	      value={formik.values.taiKhoan}
              fullWidth
              label="Tài khoản"
              variant="outlined"
            />
	    {/* Nếu touched bằng true thì nó mới hiện lỗi */}
	       {formik.touched.taiKhoan &&  (<p className="text-danger">{formik.errors.taiKhoan}</p>)}
          </div>
          <div className={classes.marginBotton}>
            <TextField
              name="matKhau"
	      onChange={formik.handleChange}
	      onBlur={formik.handleBlur}
	       value={formik.values.matKhau}
              fullWidth
              label="Mật khẩu"
              variant="outlined"
            />
	       {formik.touched.matKhau &&  (<p className="text-danger">{formik.errors.matKhau}</p>)}
          </div>
          <div style={{ textAlign: "center" }}>
            <Button type="submit" className="mr-4" variant="contained" color="primary">
              Đăng nhập
            </Button>
            <NavLink
              to="/signup"
              component={Button}
              variant="contained"
              color="primary"
            >
              Đăng ký
            </NavLink>
          </div>
        </form>
      </Container>
    </div>
  );
}
export default memo(Signin)