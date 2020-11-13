import { Modal, InputNumber } from "antd";
import "./Styles.scss";

const Home = ({
	isShowing,
	showModal,
	hideModal,
	onSubmit,
}) => {
	const glassIcon = "/icons/glass-192.png";

	return (
		<div id='home-page'>
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
