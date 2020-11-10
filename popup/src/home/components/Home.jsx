import classnames from 'classnames';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Badge } from 'antd';
import { HomeOutlined, TeamOutlined, SearchOutlined, HistoryOutlined } from '@ant-design/icons';

import { SECTIONS } from '../constants';
import { Main, Search, Friends, Notifications } from './index';
import { logout } from '../../login/actions';

import '../styles.css';

const Home = () => {
    const dispatch = useDispatch();

    const [section, setSection] = useState(SECTIONS.MAIN);
    const notifications = useSelector(state => state.home.notifications)

    const onChangeSection = (name) => setSection(name);
    const onLogout = () => dispatch(logout());

    return (
        <div id={'home-page'}>
            <Header section={section} changeSection={onChangeSection} notifications={notifications} />
            { section === SECTIONS.MAIN && <Main /> }
            { section === SECTIONS.SEARCH && <Search /> }
            { section === SECTIONS.FRIENDS && <Friends /> }
            { section === SECTIONS.NOTIFICATIONS && <Notifications />}
            <Footer onLogout={onLogout} />
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
            badge={notifications.length || 5} />
    </div>
);

const Footer = ({onLogout}) => (
    <div className='footer'>
        <Button type='text' size='large' danger onClick={onLogout}>
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

export default Home;