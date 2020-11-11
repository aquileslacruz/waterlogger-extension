import { formatDate } from '../utilities';

const NotificationList = ({notifications, onRemove}) => (
    <div className='notification-list'>
        { notifications.map(elem => <Notification {...elem} onRemove={onRemove} />) }
    </div>
)

const Notification = ({id, user, glasses, datetime, onRemove}) => (
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

export default NotificationList;