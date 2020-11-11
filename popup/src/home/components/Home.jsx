import classnames from 'classnames';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Badge, Modal } from 'antd';
import { HomeOutlined, TeamOutlined, SearchOutlined, HistoryOutlined } from '@ant-design/icons';

import { SECTIONS } from '../constants';
import { Main, Search, Friends, Notifications } from './index';
import { logout, reload } from '../../login/actions';
import { getNotifications } from '../actions';

import '../styles.css';

const Home = () => {
    const dispatch = useDispatch();

    const [section, setSection] = useState(SECTIONS.MAIN);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const token = useSelector(state => state.login.token);
    const notifications = useSelector(state => state.home.notifications);

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

    return (
        <div id={'home-page'}>
            <Header section={section} changeSection={onChangeSection} notifications={notifications} />
            { section === SECTIONS.MAIN && <Main /> }
            { section === SECTIONS.SEARCH && <Search /> }
            { section === SECTIONS.FRIENDS && <Friends /> }
            { section === SECTIONS.NOTIFICATIONS && <Notifications />}
            <LogoutModal show={showLogoutModal} hide={onHideLogoutModal} logout={onLogout} />
            <Footer onLogout={onShowLogoutModal} />
        </div>
    )
};

const Header = ({section, changeSection, notifications}) => (
    <div className='header'>
        <SectionHeader name='Home' selected={section===SECTIONS.MAIN} 
            onClick={() => changeSection(SECTIONS.MAIN)} icon={<HomeOutlined />} />
        <SectionHeader name='Search' selected={section===SECTIONS.SEARCH} 
            onClick={() => changeSection(SECTIONS.SEARCH)} icon={<SearchOutlined />} />
        <SectionHeader name='Friends' selected={section===SECTIONS.FRIENDS} 
            onClick={() => changeSection(SECTIONS.FRIENDS)} icon={<TeamOutlined />} />
        <SectionHeader name='Notifications' selected={section===SECTIONS.NOTIFICATIONS} 
            onClick={() => changeSection(SECTIONS.NOTIFICATIONS)} icon={<HistoryOutlined />} 
            badge={notifications.length} />
    </div>
);

const Footer = ({onLogout}) => (
    <div className='footer'>
        <Button type='link' onClick={onLogout}>
            {'Logout'}
        </Button>
    </div>
);

const SectionHeader = ({name, selected, onClick, icon, badge=0}) => {
    const classes = classnames({
        'section-header': true,
        'selected': selected
    });

    return (
        <div className={classes} onClick={onClick}>
            <Badge count={badge} overflowCount={10}>
                {icon}
            </Badge>
        </div>
    )
};

const LogoutModal = ({show, hide, logout}) => (
    <Modal
        title='Log out'
        visible={show}
        onOk={logout}
        onCancel={hide}
    >
        <p>{'Do you really want to log out?'}</p>
    </Modal>
)

export default Home;