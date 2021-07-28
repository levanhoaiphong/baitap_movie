import { Button, Container, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import Header from "../../Component/Header";
import useStyle from "./style";

export default function Signup(props) {
  const classes = useStyle();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      maNhom: "GP01",
      soDt: "",
    },
  });
  const registerUser = () =>{
	  axios({
		  url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
		  method: "POST",
		  data: formik.values
	  })
	  .then((res)=>{
		  // console.log(res)
		  alert("Đăng ký thành công")
	  })
	  .catch((err)=>{
		console.log(err)
	  })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formik.values);
    registerUser()
  };
  return (
    <>
      <Header />
      <Typography className="mt-4 mb-4" variant="h3" align="center">
        Đăng ký
      </Typography>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <div className={classes.marginBottom}>
            <TextField
              fullWidth
              name="taiKhoan"
	      onChange={formik.handleChange}
	       value={formik.values.taiKhoan}
              label="Tài Khoản"
              variant="outlined"
            />
          </div>
          <div className={classes.marginBottom}>
            <TextField
              fullWidth
              name="matKhau"
	      onChange={formik.handleChange}
	       value={formik.values.matKhau}
              label="Mật Khẩu"
              variant="outlined"
            />
          </div>
          <div className={classes.marginBottom}>
            <TextField
              fullWidth
              name="hoTen"
	      onChange={formik.handleChange}
	       value={formik.values.hoTen}
              label="Họ Tên"
              variant="outlined"
            />
          </div>
          <div className={classes.marginBottom}>
            <TextField
              fullWidth
              name="email"
	      onChange={formik.handleChange}
	       value={formik.values.email}
              label="Email"
              variant="outlined"
            />
          </div>
          <div className={classes.marginBottom}>
            <TextField
              fullWidth
              name="soDt"
	      onChange={formik.handleChange}
	       value={formik.values.soDt}
              label="Số Điện Thoại"
              variant="outlined"
            />
          </div>
          <div className={classes.marginBottom}>
            <Button type="Submit" variant="contained" color="primary">
              Đăng ký
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
