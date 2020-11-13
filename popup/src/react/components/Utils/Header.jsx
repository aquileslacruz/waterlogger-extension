import classnames from "classnames";

import {
	HomeOutlined,
	TeamOutlined,
	SearchOutlined,
	HistoryOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "antd";

import { PAGES } from "../../../redux/constants/app";
import { changePage, reload } from "../../../redux/actions/app";

const Header = () => {
	const dispatch = useDispatch();

	const page = useSelector((state) => state.app.page);
	const token = useSelector((state) => state.app.token);
	const notifications = useSelector(
		(state) => state.notifications.notifications
	);

	const goToPage = (newPage) => {
		dispatch(reload(token));
		dispatch(changePage(newPage));
	};

	return (
		<div id='AppHeader'>
			<SectionHeader
				name='Home'
				selected={page === PAGES.HOME}
				onClick={() => goToPage(PAGES.HOME)}
				icon={<HomeOutlined />}
			/>
			<SectionHeader
				name='Search'
				selected={page === PAGES.SEARCH}
				onClick={() => goToPage(PAGES.SEARCH)}
				icon={<SearchOutlined />}
			/>
			<SectionHeader
				name='Following'
				selected={page === PAGES.FOLLOWING}
				onClick={() => goToPage(PAGES.FOLLOWING)}
				icon={<TeamOutlined />}
			/>
			<SectionHeader
				name='Notifications'
				selected={page === PAGES.NOTIFICATIONS}
				onClick={() => goToPage(PAGES.NOTIFICATIONS)}
				icon={<HistoryOutlined />}
				badge={notifications.length}
			/>
		</div>
	);
};

const SectionHeader = ({ name, selected, onClick, icon, badge = 0 }) => {
	const classes = classnames({
		"section-header": true,
		selected: selected,
	});

	return (
		<div className={classes} onClick={onClick}>
			<Badge count={badge} overflowCount={10}>
				{icon}
			</Badge>
		</div>
	);
};

export default Header;
