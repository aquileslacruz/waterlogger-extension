import { StopOutlined } from '@ant-design/icons';

const NoData = () => (
    <div className='no-data'>
        <StopOutlined style={{ fontSize: 48, color: '#a8071a' }} />
        {'You have no new notifications'}
    </div>
);

export default NoData;