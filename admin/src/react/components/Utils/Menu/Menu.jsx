import { TeamOutlined, PoweroffOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { PAGES } from "../../../../redux/constants/app";
import { changePage, clearData } from "../../../../redux/actions/app";
import classnames from "classnames";
import "./Styles.scss";

const Menu = () => {
	const dispatch = useDispatch();
	const page = useSelector((state) => state.app.page);

	const getClasses = (current, page) =>
		classnames({
			section: true,
			selected: current === page,
		});

	const goToPage = (page) => dispatch(changePage(page));
	const logOff = () => clearData();

	return (
		<div id='side-menu'>
			<div
				className={getClasses(page, PAGES.USERS)}
				onClick={() => goToPage(PAGES.USERS)}>
				<Tooltip title={"Show Users"}>
					<TeamOutlined />
				</Tooltip>
			</div>
			<div className='section logout' onClick={logOff}>
				<Tooltip title={"Log out"}>
					<PoweroffOutlined />
				</Tooltip>
			</div>
		</div>
	);
};

export default Menu;
