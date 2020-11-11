import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { login } from "../actions";
import { changePage } from "../../app/actions";
import { PAGES } from "../../app/constants";

import "./Styles.scss";

const LoginContainer = () => {
	const dispatch = useDispatch();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onUsernameChange = (e) => setUsername(e.target.value);
	const onPasswordChange = (e) => setPassword(e.target.value);
	const onKeyPress = (e) => e.which === 13 && submitForm();

	const submitForm = () => dispatch(login(username, password));
	const goToRegister = () => dispatch(changePage(PAGES.REGISTER));

	const inputFields = {
		username: {
			type: "text",
			value: username,
			placeholder: "Username",
			name: "username",
			onChange: onUsernameChange,
			onKeyPress,
			prefix: <UserOutlined />,
			rules: [{ required: true, message: "Please input your username!" }],
		},
		password: {
			type: "password",
			value: password,
			placeholder: "Password",
			name: "password",
			onChange: onPasswordChange,
			onKeyPress,
			rules: [{ required: true, message: "Please input your password!" }],
			prefix: <LockOutlined />,
		},
	};

	return (
		<Login
			fields={inputFields}
			onSubmit={submitForm}
			onRegisterClick={goToRegister}
		/>
	);
};

export default LoginContainer;
