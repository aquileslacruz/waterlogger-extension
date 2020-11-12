import { useSelector } from "react-redux";
import { Notifications } from ".";
import { removeNotification } from "../../../redux/actions/notifications";

import "./Styles.scss";

const Notifications = () => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.login.token);

	const onRemove = (id) => dispatch(removeNotification(token, id));

	return <Notifications onRemove={onRemove} />;
};

export default Notifications;
