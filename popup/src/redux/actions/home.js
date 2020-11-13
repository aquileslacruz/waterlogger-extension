import axios from "axios";
import { ROUTES } from "../constants/app";
import { ACTIONS } from "../constants/home";
import { handleUnauthorized, reload, setAppMessage } from "./app";

const set_todays_drinks = (data) => ({
	type: ACTIONS.SET_TODAYS_DRINKS,
	value: data,
});

const set_high_scores = (data) => ({
	type: ACTIONS.SET_HIGH_SCORES,
	value: data,
});

export const drankWater = (token, glasses) => (dispatch) =>
	axios
		.post(
			ROUTES.DRINK_WATER,
			{ glasses },
			{ headers: { Authorization: `Bearer ${token}` } }
		)
		.then(() => {
			dispatch(getTodaysDrinks(token));
			dispatch(
				setAppMessage({
					message: `Congratulations on drinking ${glasses} ${
						glasses > 1 ? "glasses" : "glass"
					}!`,
					type: "success",
				})
			);
			dispatch(reload(token));
			setTimeout(() => dispatch(setAppMessage(null)), 5 * 1000);
		})
		.catch((error) => dispatch(handleUnauthorized(error)));

export const getTodaysDrinks = (token) => (dispatch) =>
	axios
		.get(ROUTES.TODAYS_DRINKS, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response.data)
		.then((data) => dispatch(set_todays_drinks(data)))
		.catch((error) => dispatch(handleUnauthorized(error)));
