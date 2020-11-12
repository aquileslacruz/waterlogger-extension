import { useSelector, useDispatch } from "react-redux";
import { Notifications } from ".";
import { removeNotification } from "../../../redux/actions/notifications";

import "./Styles.scss";

const NotificationsContainer = () => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.app.token);

	const onRemove = (id) => dispatch(removeNotification(token, id));

	return <Notifications onRemove={onRemove} />;
};

export default NotificationsContainer;
