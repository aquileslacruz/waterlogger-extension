import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

import { logout } from '../../login/actions';

import '../styles.css';

const Home = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.login.user) || {};
    const name = user.first_name && user.last_name ?
        `${user.first_name} ${user.last_name}` :
        user.username;

    const onLogout = () => dispatch(logout());

    return (
        <div id={'home-page'}>
            <span>{`Hello ${name}`}</span>
            <div className='footer'>
                <Button type='default' onClick={onLogout}>
                    {'Logout'}
                </Button>
            </div>
        </div>
    )
}

export default Home;