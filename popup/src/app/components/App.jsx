import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Alert } from 'antd';

import Login from '../../login/components/Login';
import Register from '../../login/components/Register';
import Home from '../../home/components/Home';
import { PAGES } from '../constants';
import { setAppMessage } from '../actions';

import "antd/dist/antd.css";
import '../styles.css';


const App = () => {
    const dispatch = useDispatch();

    const page = useSelector(state => state.app.page);
    const message = useSelector(state => state.app.message);

    useEffect(() => {
        console.log('Loading stuff');
    }, []);

    useEffect(() => {
        if (message) {
            setTimeout(onCloseMessage, 10 * 1000);
        }
    }, [message]);

    const onCloseMessage = () => dispatch(setAppMessage(null));

    return (
        <div id='app-container'>
            {message && <Message alert={message} onClose={onCloseMessage} />}
            {page === PAGES.LOGIN && <Login />}
            {page === PAGES.REGISTER && <Register />}
            {page === PAGES.HOME && <Home />}
        </div>
    )
}

const Message = ({alert, onClose}) => (
    <Alert showIcon message={alert.message} type={alert.type} closable onClose={onClose} />
)

export default App;