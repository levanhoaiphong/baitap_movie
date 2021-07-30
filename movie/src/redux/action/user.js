import axios from "axios";
import { useHistory } from "react-router-dom";
import { createAction } from "./createAction";
import { actionType } from "./type";

export const signIn = (user, callBack) => {
	return (dispatch) => {
		axios({
			url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
			method: "POST",
			data: user,
		})
			.then((res) => {
				dispatch(createAction(actionType.SET_USER, res.data));
				if (res.data.accessToken) {
					localStorage.setItem("t", JSON.stringify(res.data));
				}
				callBack();
			})
			.catch((err) => {
				console.log(err)
			})
	}
}
export const signOut = () => {
	return (dispatch) => {
		dispatch(createAction(actionType.REMOVE_USER))
		localStorage.removeItem('t')
	}
}