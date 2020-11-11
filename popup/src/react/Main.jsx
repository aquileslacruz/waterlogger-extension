import { useSelector } from "react-redux";
import { Login, Register, Home, Search, Notifications } from "./components";
import { PAGES } from "../redux/constants/app";

const Main = () => {
	const page = useSelector(state.app.page);
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
