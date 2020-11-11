import classnames from 'classnames';

import { HomeOutlined, TeamOutlined, SearchOutlined, HistoryOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Badge } from 'antd';

import { SECTIONS } from '../constants';


const Header = ({section, changeSection}) => {
    const notifications = useSelector(state => state.notifications.notifications);

    return (
        <div className='header'>
            <SectionHeader name='Home' selected={section===SECTIONS.HOME} 
                onClick={() => changeSection(SECTIONS.HOME)} icon={<HomeOutlined />} />
            <SectionHeader name='Search' selected={section===SECTIONS.SEARCH} 
                onClick={() => changeSection(SECTIONS.SEARCH)} icon={<SearchOutlined />} />
            <SectionHeader name='Friends' selected={section===SECTIONS.FRIENDS} 
                onClick={() => changeSection(SECTIONS.FRIENDS)} icon={<TeamOutlined />} />
            <SectionHeader name='Notifications' selected={section===SECTIONS.NOTIFICATIONS} 
                onClick={() => changeSection(SECTIONS.NOTIFICATIONS)} icon={<HistoryOutlined />} 
                badge={notifications.length} />
        </div>
    )
};

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

export default Header;