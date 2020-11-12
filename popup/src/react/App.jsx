import { useSelector } from "react-redux";
import { PAGES } from "../redux/constants/app";
import {
	Login,
	Register,
	Home,
	Search,
	Notifications,
	Header,
	Footer,
} from "./components";

import "antd/dist/antd.css";
import "./App.scss";

const App = () => {
	const page = useSelector((state) => state.app.page);
	const showHeader = ![PAGES.LOGIN, PAGES.REGISTER].includes(page);

	return (
		<>
			{page === PAGES.LOGIN && <Login />}
			{page === PAGES.REGISTER && <Register />}
			{showHeader && (
				<>
					<Header />
					{page === PAGES.HOME && <Home />}
					{page === PAGES.SEARCH && <Search />}
					{page === PAGES.NOTIFICATIONS && <Notifications />}
					<Footer />
				</>
			)}
		</>
	);
};

export default App;
