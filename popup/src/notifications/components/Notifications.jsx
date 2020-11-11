import { useSelector } from 'react-redux';
import { NotificationList, NoData } from '.';

import '../styles.scss';

const Notifications = () => {
    const notifications = useSelector(state => state.notifications.notifications);
    const isEmpty = notifications.length === 0;

    return (
        <div id='notification-section' className='section'>
            { !isEmpty && <NotificationList notifications={notifications} /> }
            { isEmpty && <NoData /> }
        </div>
    )
};

export default Notifications;