import { Modal, Button } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, openAdminPanel } from "../../../redux/actions/app";

const Footer = () => {
	const dispatch = useDispatch();

	const [showModal, setShowModal] = useState(false);
	const user = useSelector((state) => state.app.user);

	const onClickLogout = () => setShowModal(true);
	const onClickCancel = () => setShowModal(false);

	const onLogout = () => dispatch(logout());

	return (
		<>
			<div id='AppFooter'>
				{user.is_admin && (
					<Button type='link' onClick={openAdminPanel}>
						{"Admin Panel"}
					</Button>
				)}
				<Button type='link' onClick={onClickLogout}>
					{"Logout"}
				</Button>
			</div>
			<LogoutModal
				show={showModal}
				onClickCancel={onClickCancel}
				logout={onLogout}
			/>
		</>
	);
};

const LogoutModal = ({ show, onClickCancel, logout }) => (
	<Modal
		title='Log out'
		visible={show}
		onOk={logout}
		onCancel={onClickCancel}>
		<p>{"Do you really want to log out?"}</p>
	</Modal>
);

export default Footer;
