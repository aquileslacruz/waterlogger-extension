import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Alert } from "antd";
import { PAGES } from "../redux/constants/app";
import { getUserInfo, loadStorageReducers, setAppMessage } from "../redux/actions/app";
import {
	Login,
	Register,
	Home,
	Search,
	Following,
	Notifications,
	Header,
	Footer,
} from "./components";

import "antd/dist/antd.css";
import "./App.scss";

const App = () => {
	const dispatch = useDispatch();

	const page = useSelector((state) => state.app.page);
	const token = useSelector((state) => state.app.token);
	const message = useSelector((state) => state.app.message);
	const showHeader = ![PAGES.LOGIN, PAGES.REGISTER].includes(page);

	const getInfo = () => token !== null && dispatch(getUserInfo(token));
	const clearMessage = () => dispatch(setAppMessage(null));

	useEffect(() => {
		dispatch(loadStorageReducers());
	}, []);

	useEffect(() => {
		const timer = setInterval(getInfo, 60 * 1000);
		return () => clearInterval(timer);
	}, [token]);

	return (
		<>
			{page === PAGES.LOGIN && <Login />}
			{page === PAGES.REGISTER && <Register />}
			{showHeader && (
				<>
					<Header />
					{page === PAGES.HOME && <Home />}
					{page === PAGES.SEARCH && <Search />}
					{page === PAGES.FOLLOWING && <Following />}
					{page === PAGES.NOTIFICATIONS && <Notifications />}
					<Footer />
				</>
			)}
			{message && (
				<Alert
					className='GlobalAlert'
					type={message.type}
					message={message.message}
					closable
					onClose={clearMessage}
				/>
			)}
		</>
	);
};

export default App;
