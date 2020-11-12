import { useSelector } from "react-redux";
import { StopOutlined } from "@ant-design/icons";
import { formatDate } from "../../utilities";

const Notifications = ({ onRemove }) => {
	const notifications = useSelector(
		(state) => state.notifications.notifications
	);

	return (
		<div id='notification-section' className='section'>
			{notifications.length > 0 && (
				<div className='notification-list'>
					{notifications.map((elem) => (
						<Notification {...elem} onRemove={onRemove} />
					))}
				</div>
			)}
			{notifications.length === 0 && (
				<div className='no-data'>
					<StopOutlined style={{ fontSize: 48, color: "#a8071a" }} />
					{"You have no new notifications"}
				</div>
			)}
		</div>
	);
};

const Notification = ({ id, user, glasses, datetime, onRemove }) => (
	<div className='notification'>
		<div className='info'>
			<div className='user'>{user}</div>
			<div className='message'>{`Drank ${glasses} glasses of water`}</div>
		</div>
		<div className='time'>{formatDate(datetime)}</div>
		<div className='btn-remove' onClick={() => onRemove(id)}>
			x
		</div>
	</div>
);

export default Notifications;
