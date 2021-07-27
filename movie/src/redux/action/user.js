import axios from "axios"
import { createAction } from "./createAction"
import { actionType } from "./type"



export const signIn = (user, callBack) => {
	return (dispatch) => {
		axios({
			url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
			method: "POST",
			data: user,
		})
			.then((res) => {
				dispatch(createAction(actionType.SET_USER, res.data));
				localStorage.setItem("t", res.data.accessToken);
				callBack();
			})
			.catch((err) => {
				console.log(err)
			})
	}
}