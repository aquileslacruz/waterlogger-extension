const API_URL = "http://127.0.0.1:8000";
const ROUTES = {
	NOTIFICATIONS: `${API_URL}/notifications/`,
};

let interval;

const getNotifications = (token) => {
	fetch(ROUTES.NOTIFICATIONS, {
		method: "GET",
		headers: { Authorization: `Bearer ${token}` },
	})
		.then((response) => response.json())
		.then((json) => {
			chrome.storage.local.get(["notifications"], (results) => {
				const notifications = results.notifications;
				chrome.storage.local.set({
					notifications: { ...notifications, notifications: json },
				});
				changeBadgeText(json);
			});
		});
};

const reloadNotifications = () => {
	console.log("Loading Notifications...");
	chrome.storage.local.get(["app"], (results) => {
		const token = results.app ? results.app.token : null;
		if (token) {
			getNotifications(token);
		}
	});
};

const changeBadgeText = (notifications) =>
	chrome.browserAction.setBadgeText({
		text: `${notifications.length > 0 ? notifications.length : ""}`,
	});

interval = setInterval(reloadNotifications, 60 * 1000);
reloadNotifications();

chrome.runtime.onSuspend.addListener(() => clearInterval(interval));
chrome.storage.onChanged.addListener((changes, namespace) => {
	if (changes.notifications) {
		if (changes.notifications.newValue) {
			changeBadgeText(changes.notifications.newValue.notifications);
		} else {
			changeBadgeText([]);
		}
	}
});
