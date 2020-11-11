import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from '../actions';
import { formatDate } from '../utilities';


const NotificationList = ({notifications}) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.login.token);

    const onRemove = (id) => dispatch(removeNotification(token, id));
    
    return (
        <div className='notification-list'>
            { notifications.map(elem => <Notification {...elem} onRemove={onRemove} />) }
        </div>
    )
};

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