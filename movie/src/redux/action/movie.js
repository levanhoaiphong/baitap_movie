import axios from "axios"
import { createAction } from "./createAction"
import { actionType } from "./type"

export const fetchMovie = (dispatch) => {
	axios({
		url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
		method: "GET",
	})
		.then((res) => {
			dispatch(createAction(actionType.SET_MOVIE, res.data))
		})
		.catch((err) => {
			console.log(err)
		})
}

export const fetchMovieId = (id) => {
	return (dispatch) => {
		axios({
			url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim`,
			mothod: "GET",
			params: {
				maPhim: id,
			}
		})
			.then((res) => {
				dispatch(createAction(actionType.SET_MOVIE_DETAIL, res.data))
			})
			.catch((err) => {
				console.log(err)
			})
	}
}