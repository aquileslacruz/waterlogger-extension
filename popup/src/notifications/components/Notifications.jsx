import { useDispatch, useSelector } from 'react-redux';

import { NotificationList, NoData } from '.';
import { removeNotification } from '../actions';

import '../styles.css';

const Notifications = () => {
    const dispatch = useDispatch();

    const token = useSelector(state => state.login.token);
    const notifications = useSelector(state => state.notifications.notifications);

    const onRemoveNotification = (id) => dispatch(removeNotification(token, id));

    return (
        <div id='notification-section' className='section'>
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

export default Notifications;