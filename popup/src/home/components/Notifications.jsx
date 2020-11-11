import { useDispatch, useSelector } from 'react-redux';
import { StopOutlined } from '@ant-design/icons'

import { removeNotification } from '../actions';

const Notifications = () => {
    const dispatch = useDispatch();

    const token = useSelector(state => state.login.token);
    const notifications = useSelector(state => state.home.notifications);

    const onRemoveNotification = (id) => dispatch(removeNotification(token, id));

    return (
        <div className='section'>
            { 
                notifications.length > 0 && 
                <NotificationList 
                    notifications={notifications} 
                    onRemove={onRemoveNotification} 
                />
            }
            { notifications.length === 0 && <NoData /> }
        </div>
    )
};

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
)

const NoData = () => (
    <div className='no-data'>
        <StopOutlined style={{ fontSize: 48, color: '#a8071a' }} />
        {'You have no new notifications'}
    </div>
);

const formatDate = (str) => {
    const date = new Date(str);
    const today = new Date();

    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() 
        && date.getFullYear() === today.getFullYear()) {
            return `${('0'+date.getHours()).slice(-2)}:${('0'+date.getMinutes()).slice(-2)}`;
        }

    const msInDay = 24 * 60 * 60 * 1000;
    date.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const daysAgo = (+today - +date)/msInDay;

    return daysAgo > 1 ? `${daysAgo} days ago` : 'Yesterday';
};

export default Notifications;