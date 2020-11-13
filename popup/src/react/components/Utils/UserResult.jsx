import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const UserResult = ({
	id,
	username,
	image = "/profile.png",
	onFollow,
	onUnfollow,
}) => (
	<div className='item' key={id}>
		<img src={image} className='image' alt={username} />
		<span>{username}</span>
		<div className='right'>
			<FollowButton {...{ id, onFollow, onUnfollow }} />
		</div>
	</div>
);

const FollowButton = ({ id, onFollow, onUnfollow }) => {
	const following = useSelector((state) => state.following.following);
	const isFollowing = following.map((e) => e.id).includes(id);

	return isFollowing ? (
		<MinusCircleOutlined
			className='remove-icon'
			onClick={() => onUnfollow(id)}
		/>
	) : (
		<PlusCircleOutlined className='add-icon' onClick={() => onFollow(id)} />
	);
};

export default UserResult;
