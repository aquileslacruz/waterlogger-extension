import axios from "axios";
import { ROUTES } from "../constants/app";
import { handleUnauthorized, setAppMessage } from "./app";

export const drankWater = (token, glasses) => (dispatch) =>
	axios
		.post(
			ROUTES.DRINK_WATER,
			{ glasses },
			{ headers: { Authorization: `Bearer ${token}` } }
		)
		.then(() => {
			dispatch(
				setAppMessage({
					message: `Congratulations on drinking ${glasses} glasses!`,
					type: "success",
				})
			);
			setTimeout(() => dispatch(setAppMessage(null)), 5 * 1000);
		})
		.catch((error) => dispatch(handleUnauthorized(error)));
