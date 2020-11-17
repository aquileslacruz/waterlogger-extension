import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../redux/actions/app";
import { Users } from ".";
import "./Styles.scss";

const UsersContainer = () => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.app.token);
	const users = useSelector((state) => state.app.users);
	const [loading, setLoading] = useState(false);

	useEffect(() => setLoading(false), [users]);
	useEffect(() => { dispatch(getUsers(token)); }, []);

	const onChangeTable = (pagination, filters, sorter, extra) => {
		setLoading(true);
		dispatch(getUsers(token, pagination.current, pagination.pageSize));
	};

	return <Users {...{ users, loading, onChangeTable }} />;
};

export default UsersContainer;
