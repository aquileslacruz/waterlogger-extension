import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import { getUsers, updateUser, deleteUser } from "../../../redux/actions/app";
import { Users } from ".";
import "./Styles.scss";

const UsersContainer = () => {
	const dispatch = useDispatch();

	const token = useSelector((state) => state.app.token);
	const users = useSelector((state) => state.app.users);

	const [loading, setLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [selectedId, setSelectedId] = useState(null);

	useEffect(() => setLoading(false), [users]);
	useEffect(() => {
		dispatch(getUsers(token));
	}, []);

	const onChangeTable = (pagination, filters, sorter, extra) => {
		setLoading(true);
		dispatch(getUsers(token, pagination.current, pagination.pageSize));
	};

	const onClickDelete = (id) => {
		setShowModal(true);
		setSelectedId(id);
	};

	const onChangeAdmin = (id, isAdmin) =>
		dispatch(updateUser(token, id, isAdmin));
	const onDelete = (id) => {
		dispatch(deleteUser(token, id));
		setShowModal(false);
	};

	return (
		<>
			<Users
				{...{
					users,
					loading,
					onChangeTable,
					onClickDelete,
					onChangeAdmin,
				}}
			/>
			<Modal
				title={"Delete user"}
				visible={showModal}
				onOk={() => onDelete(selectedId)}
				onCancel={() => setShowModal(false)}>
				<p>{`Are you sure you want to delete user (id: ${selectedId})?`}</p>
			</Modal>
		</>
	);
};

export default UsersContainer;
