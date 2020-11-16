import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../redux/actions/app";
import { PAGES } from "../redux/constants/app";
import { Users } from "./components";
import "antd/dist/antd.css";
import "./App.scss";

const App = () => {
	const dispatch = useDispatch();

	const page = useSelector((state) => state.app.page);
	const token = useSelector((state) => state.app.token);

	const goToPage = (page) => dispatch(changePage(token, page));

	return <div id='app-container'>{page === PAGES.USERS && <Users />}</div>;
};

export default App;
