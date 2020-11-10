import classnames from 'classnames';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { HomeOutlined, TeamOutlined, SearchOutlined } from '@ant-design/icons';

import { SECTIONS } from '../constants';
import { Main, Search, Friends } from './index';
import { logout } from '../../login/actions';

import '../styles.css';

const Home = () => {
    const dispatch = useDispatch();

    const [section, setSection] = useState(SECTIONS.MAIN);

    const onChangeSection = (name) => setSection(name);
    const onLogout = () => dispatch(logout());

    return (
        <div id={'home-page'}>
            <Header section={section} changeSection={onChangeSection} />
            { section === SECTIONS.MAIN && <Main /> }
            { section === SECTIONS.SEARCH && <Search /> }
            { section === SECTIONS.FRIENDS && <Friends /> }
            <Footer onLogout={onLogout} />
        </div>
    )
};

const Header = ({section, changeSection}) => (
    <div className='header'>
        <SectionHeader name='Home' selected={section===SECTIONS.MAIN} 
            onClick={() => changeSection(SECTIONS.MAIN)} icon={<HomeOutlined />} />
        <SectionHeader name='Search' selected={section===SECTIONS.SEARCH} 
            onClick={() => changeSection(SECTIONS.SEARCH)} icon={<SearchOutlined />} />
        <SectionHeader name='Friends' selected={section===SECTIONS.FRIENDS} 
            onClick={() => changeSection(SECTIONS.FRIENDS)} icon={<TeamOutlined />} />
    </div>
);

const Footer = ({onLogout}) => (
    <div className='footer'>
        <Button type='default' onClick={onLogout}>
            {'Logout'}
        </Button>
    </div>
);

const SectionHeader = ({name, selected, onClick, icon}) => {
    const classes = classnames({
        'section-header': true,
        'selected': selected
    });

    return (
        <div className={classes} onClick={onClick}>
            {icon}
        </div>
    )
};

export default Home;