import { formatDate } from "../../utilities";

const Notifications = ({ notifications, onRemove }) => (
	<div id='notification-section' className='section'>
		{!isEmpty && (
			<div className='notification-list'>
				{notifications.map((elem) => (
					<Notification {...elem} onRemove={onRemove} />
				))}
			</div>
		)}
		{isEmpty && <NoData />}
	</div>
);

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
