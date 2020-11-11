import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// CONSTANT IMPORTS
import { SECTIONS } from '../constants';

// COMPONENT IMPORTS
import { Friends, Home, Header, Footer } from '.';
import { Search } from '../../search/components';
import { Notifications } from '../../notifications/components';

// ACTION IMPORTS
import { logout, reload } from '../../login/actions';
import { getNotifications } from '../../notifications/actions';

import '../styles.scss';

const Main = () => {
    const dispatch = useDispatch();

    const [section, setSection] = useState(SECTIONS.HOME);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const token = useSelector(state => state.login.token);
    const notifications = useSelector(state => state.notifications.notifications);

    const onChangeSection = (name) => {
        setSection(name);
        dispatch(reload(token));
    }

    const onShowLogoutModal = () => setShowLogoutModal(true);
    const onHideLogoutModal = () => setShowLogoutModal(false);

    const onLogout = () => dispatch(logout());

    useEffect(() => {
        dispatch(getNotifications(token));
        const interval = setInterval(() => dispatch(getNotifications(token)), 60*1000);
        return () => clearInterval(interval);
    }, []);

    const headerData = {
        section,
        notifications,
        changeSection: onChangeSection,
    };

    const footerData = {
        show: showLogoutModal,
        hide: onHideLogoutModal,
        logout: onLogout,
        onLogout: onShowLogoutModal,
    };

    return (
        <div id={'home-page'}>
            <Header {...headerData} />
            { section === SECTIONS.HOME && <Home /> }
            { section === SECTIONS.SEARCH && <Search /> }
            { section === SECTIONS.FRIENDS && <Friends /> }
            { section === SECTIONS.NOTIFICATIONS && <Notifications />}
            <Footer {...footerData} />
        </div>
    )
};

export default Main;