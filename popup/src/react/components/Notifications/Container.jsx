import { useSelector } from 'react-redux';
import { Notifications } from '.';

import './Styles.scss';

const Notifications = () => {
    const dispatch = useDispatch();

    const token = useSelector(state => state.login.token);
    const notifications = useSelector(state => state.notifications.notifications);

    const onRemove = (id) => dispatch(removeNotification(token, id));

    const isEmpty = notifications.length === 0;

    return <Notifications notifications={notifications} onRemove={onRemove} />
};

export default Notifications;