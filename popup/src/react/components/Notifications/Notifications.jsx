import { useSelector } from "react-redux";
import { StopOutlined } from "@ant-design/icons";
import { formatDate } from "../../utilities";

const Notifications = ({ onRemove }) => {
	const notifications = useSelector(
		(state) => state.notifications.notifications
	);

	return (
		<div id='notification-page'>
			{notifications.length > 0 && (
				<div className='notification-list'>
					{notifications.map((elem) => (
						<Notification key={elem.id} {...elem} onRemove={onRemove} />
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
		<div className='name'>
			<span>{user}</span>
		</div>
		<div className='info'>
			<div className='water'>
				<img src={`${process.env.PUBLIC_URL}/icons/glass-192.png`} alt='glass' />
				<span>{`x ${glasses}`}</span>
			</div>
			<div className='time'>{formatDate(datetime)}</div>
		</div>
		<div className='btn-remove' onClick={() => onRemove(id)}>
			x
		</div>
	</div>
);

export default Notifications;
