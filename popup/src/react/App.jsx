import { useSelector } from "react-redux";
import { Alert } from "antd";
import { PAGES } from "../redux/constants/app";
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
	const page = useSelector((state) => state.app.page);
	const message = useSelector((state) => state.app.message);
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
					{page === PAGES.FOLLOWING && <Following />}
					{page === PAGES.NOTIFICATIONS && <Notifications />}
					<Footer />
				</>
			)}
			{ message &&
				<Alert
					className='GlobalAlert'
					type={message.type}
					message={message.message}
				/>
			}
		</>
	);
};

export default App;
