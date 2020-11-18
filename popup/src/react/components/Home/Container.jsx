import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drankWater } from "../../../redux/actions/home";
import { Home } from ".";

const Container = () => {
	const dispatch = useDispatch();

	const token = useSelector((state) => state.app.token);

	const [isShowing, setIsShowing] = useState(false);
	const [time, setTime] = useState(new Date());

	const showModal = () => setIsShowing(true);
	const hideModal = () => setIsShowing(false);

	const onSubmit = (e) => {
		dispatch(drankWater(token, e.target.value));
		hideModal();
	};

	useEffect(() => {
		const interval = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Home
			{...{
				time,
				isShowing,
				showModal,
				hideModal,
				onSubmit,
			}}
		/>
	);
};

export default Container;
