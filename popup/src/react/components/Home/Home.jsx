import { CloseOutlined } from "@ant-design/icons";
import { Modal, InputNumber } from "antd";
import { sum } from "lodash";
import { useSelector } from "react-redux";
import "./Styles.scss";

const Home = ({ isShowing, showModal, hideModal, onSubmit }) => {
	const glassIcon = `${process.env.PUBLIC_URL}/icons/glass-192.png`;
	const todaysDrinks = useSelector((state) => state.home.todaysDrinks);
	const totalToday = sum(todaysDrinks.map((e) => e.glasses));

	return (
		<div id='home-page'>
			<div className='header'>
				<img
					src={glassIcon}
					alt='button'
					className='header-button'
					onClick={showModal}
				/>
				<CloseOutlined />
				<span className='counter'>{totalToday}</span>
			</div>
			<div className='container'>
				<img
					src={glassIcon}
					alt='button'
					className='big-button'
					onClick={showModal}
				/>
			</div>
			<Modal
				title='How many glasses?'
				visible={isShowing}
				footer={null}
				onCancel={hideModal}>
				<InputNumber
					min={1}
					max={4}
					defaultValue={1}
					onPressEnter={onSubmit}
				/>
			</Modal>
		</div>
	);
};

export default Home;
