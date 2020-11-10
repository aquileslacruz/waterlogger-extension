import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearNotifications } from '../actions';

const Notifications = () => {
    const dispatch = useDispatch();

    const token = useSelector(state => state.login.token);
    const notifications = useSelector(state => state.home.notifications);

    useEffect(() => {
        return () => dispatch(clearNotifications(token, notifications));
    }, []);

    return (
        <div className='section'>
            <div className='notification-list'>
                { notifications.map(elem => <Notification {...elem} />) }
            </div>
        </div>
    )
};

const Notification = ({id, user, glasses, datetime}) => (
    <div className='notification'>
        <div className='user'>{user}</div>
        <div className='message'>{`Drank ${glasses} glasses of water`}</div>
        <div className='time'>{formatDate(datetime)}</div>
    </div>
)

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