import { useSelector } from "react-redux";
import { Tabs } from "antd";
import { UpCircleOutlined, DownCircleOutlined } from "@ant-design/icons";
import { UserResult } from "..";
import "./Styles.scss";

const Following = ({ onUnfollow }) => {
	const following = useSelector((state) => state.following.following);
	const followers = useSelector((state) => state.following.followers);

	return (
		<div id='following-page'>
			<Tabs centered>
				<Tabs.TabPane
					tab={
						<span>
							<UpCircleOutlined />
							Following
						</span>
					}
					key='1'>
					<div className='results-list'>
						{following.map((e) => (
							<UserResult {...e} {...{ onUnfollow }} />
						))}
					</div>
				</Tabs.TabPane>
				<Tabs.TabPane
					tab={
						<span>
							<DownCircleOutlined />
							Followers
						</span>
					}
					key='2'>
					<div className='results-list'>
						{followers.map((e) => (
							<UserResult {...e} {...{ onUnfollow }} />
						))}
					</div>
				</Tabs.TabPane>
			</Tabs>
		</div>
	);
};

export default Following;
