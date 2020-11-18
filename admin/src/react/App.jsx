import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changePage, loadUserToken } from "../redux/actions/app";
import { PAGES } from "../redux/constants/app";
import { Users, Menu } from "./components";
import "antd/dist/antd.css";
import "./App.scss";

const App = () => {
	const dispatch = useDispatch();

	const page = useSelector((state) => state.app.page);
	const admin = useSelector((state) => state.app.admin);
	const token = useSelector((state) => state.app.token);

	const goToPage = (page) => dispatch(changePage(token, page));

	useEffect(() => {
		dispatch(loadUserToken());
	}, []);

	return (
		<div id='app-container'>
			{
				!admin && (
					<>
					<Menu />
					{page === PAGES.USERS && <Users />}
					</>
				)
			}
			{admin && <NoAdmin />}
		</div>
	);
};

const NoAdmin = () => (
	<div className='no-admin'>{"You must be an admin to view this page"}</div>
);

export default App;
