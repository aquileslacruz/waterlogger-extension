import { useDispatch, useSelector } from "react-redux";
import { Following } from ".";
import { unfollowUser } from "../../../redux/actions/following";

const Container = () => {
	const dispatch = useDispatch();

	const token = useSelector((state) => state.app.token);

	const onUnfollow = (id) => dispatch(unfollowUser(token, id));

	return <Following {...{ onUnfollow }} />;
};

export default Container;
