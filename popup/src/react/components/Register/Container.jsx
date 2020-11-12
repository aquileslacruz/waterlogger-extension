import { useState } from "react";
import { useDispatch } from "react-redux";

import { register, changePage } from "../../../redux/actions/app";
import { PAGES } from "../../../redux/constants/app";
import { Register } from ".";

import "./Styles.scss";

const RegisterContainer = () => {
	const dispatch = useDispatch();

	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmation, setConfirmation] = useState("");

	const handleUsername = (e) => setUsername(e.target.value);
	const handleFirstName = (e) => setFirstName(e.target.value);
	const handleLastName = (e) => setLastName(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);
	const handleConfirmation = (e) => setConfirmation(e.target.value);

	const onKeyPress = (e) => e.which === 13 && onSubmit();
	const onSubmit = () =>
		dispatch(register(username, password, firstName, lastName));
	const onLoginClick = () => dispatch(changePage(PAGES.LOGIN));

	const validatePassword = (_, value) =>
		value === "" || value === password
			? Promise.resolve()
			: Promise.reject("Password must match!");

	const inputFields = {
		username: {
			type: "text",
			value: username,
			placeholder: "Username",
			name: "username",
			onChange: handleUsername,
			onKeyPress,
			rules: [{ required: true, message: "A username is required!" }],
		},
		firstName: {
			type: "text",
			value: firstName,
			placeholder: "First Name",
			name: "firstName",
			onChange: handleFirstName,
			onKeyPress,
		},
		lastName: {
			type: "text",
			value: lastName,
			placeholder: "Last Name",
			name: "lastName",
			onChange: handleLastName,
			onKeyPress,
		},
		password: {
			type: "password",
			value: password,
			placeholder: "Password",
			name: "password",
			onChange: handlePassword,
			onKeyPress,
			rules: [{ required: true, message: "A password is required!" }],
		},
		confirmation: {
			type: "password",
			value: confirmation,
			placeholder: "Re-type your password",
			name: "confirm",
			onChange: handleConfirmation,
			onKeyPress,
			rules: [
				{ required: true, message: "You must confirm the password!" },
				{ validator: validatePassword },
			],
		},
	};

	return (
		<Register
			fields={inputFields}
			onSubmit={onSubmit}
			onLoginClick={onLoginClick}
		/>
	);
};

export default RegisterContainer;
