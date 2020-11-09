import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Loading from './Loading';
import Login from '../../login/components/Login';
import Home from '../../home/components/Home';
import { PAGES } from '../constants';

import "antd/dist/antd.css";
import '../styles.css';


const App = () => {
    const page = useSelector(state => state.app.page);

    useEffect(() => {
        console.log('Loading stuff');
    }, [])

    return (
        <div id='app-container'>
            {page === PAGES.LOADING && <Loading />}
            {page === PAGES.LOGIN && <Login />}
            {page === PAGES.HOME && <Home />}
        </div>
    )
}

export default App;