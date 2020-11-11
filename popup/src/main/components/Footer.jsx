import { Modal, Button } from 'antd';

const Footer = ({onLogout, show, hide, logout}) => (
    <>
        <div className='footer'>
            <Button type='link' onClick={onLogout}>
                {'Logout'}
            </Button>
        </div>
        <LogoutModal show={show} hide={hide} logout={logout} />
    </>
);

const LogoutModal = ({show, hide, logout}) => (
    <Modal
        title='Log out'
        visible={show}
        onOk={logout}
        onCancel={hide}
    >
        <p>{'Do you really want to log out?'}</p>
    </Modal>
);

export default Footer;