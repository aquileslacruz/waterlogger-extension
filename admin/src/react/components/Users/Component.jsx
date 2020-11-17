import { Table, Button, Space } from "antd";
import "./Styles.scss";

const Users = ({ users, loading, onChangeTable }) => {
	const columns = [
		{ title: "Id", dataIndex: "id", key: "id" },
		{ title: "Username", dataIndex: "username", key: "username" },
		{
			title: "Name",
			render: (_, record) => `${record.last_name}, ${record.first_name}`,
		},
		{
			title: "Actions",
			render: (_, record) => (
				<div className='actions'>
					<Button>Admin</Button>
					<Button danger>Delete</Button>
				</div>
			),
		},
	];

	return (
		<div id='users-page'>
			<div className='title'>{"Users"}</div>
			<div className='result-table'>
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
				/>
			</div>
		</div>
	);
};

export default Users;
