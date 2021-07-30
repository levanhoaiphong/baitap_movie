import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function Profile() {
	const user = useSelector((state)=>{
		return state.userReducer.credentials
	})
	console.log(user)
	if(localStorage.getItem('t')){
		return (
		<Container className="text-center">
			<Typography>Họ tên: {user.hoTen}</Typography>
			<Typography>Email: {user.email}</Typography>
		</Container>
	)
	}else{
		return <Redirect to="/signin"/>
	}
}
