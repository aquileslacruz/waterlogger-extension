import { Table, Button } from "antd";
import { LockFilled, DeleteFilled } from "@ant-design/icons";
import "./Styles.scss";

const Users = ({
	users,
	loading,
	onChangeTable,
	onChangeAdmin,
	onClickDelete,
}) => {
	const columns = [
		{ title: "Id", dataIndex: "id", key: "id", align: "center" },
		{
			title: "Username",
			dataIndex: "username",
			key: "username",
			align: "center",
		},
		{
			title: "Name",
			render: (_, record) =>
				record.last_name
					? `${record.last_name}, ${record.first_name}`
					: "N/A",
			align: "center",
		},
		{
			title: "Actions",
			render: (_, record) => (
				<div className='actions'>
					<LockFilled
						className={getAdminClasses(record)}
						onClick={() =>
							onChangeAdmin(record.id, !record.is_admin)
						}
					/>
					<DeleteFilled
						className={"delete-btn"}
						onClick={() => onClickDelete(record.id)}
					/>
				</div>
			),
			align: "center",
		},
	];

	const getAdminClasses = (user) => ({
		"admin-btn": true,
		selected: user.is_admin,
	});

	return (
		<div id='users-page'>
			<div className='title'>{"Users"}</div>
			<div className='results'>
				<Table
					columns={columns}
					rowKey={(record) => record.id}
					dataSource={users.results}
					pagination={{
						current: users.page,
						pageSize: users.per_page,
						total: users.total_count,
					}}
					loading={loading}
					onChange={onChangeTable}
					className={"result-table"}
				/>
			</div>
		</div>
	);
};

export default Users;
