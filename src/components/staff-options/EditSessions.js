import React from 'react';
import StaffNavbar from '../navbar/StaffNavbar.js';
import {SessionQuestions} from '../../utils/Questions.js';


const EditSessions = () => {
	const [sessionsToDelete, setSessionsToDelete] = React.useState(null);
	const [refresh, setRefresh] = React.useState(false);

	const getSessionsToDelete = async () => {
		await (await fetch(`/.netlify/functions/getSession/getSession.js`))
			.json()
			.then((data) => setSessionsToDelete(data))
			.then((sessionsToDelete) => console.log('This is sessions to delete', sessionsToDelete))
			.catch(console.error);
	};

	const deleteSession = async (id) => {
		if (window.confirm("Are you sure?")) {
			await fetch(`/.netlify/functions/deleteSession/deleteSession.js`, {
				method: "DELETE",
				body: JSON.stringify(id),
			})
				.then(setRefresh(!refresh))
				.catch(console.error);
		} else {
			return;
		}
	};
	React.useEffect(() => {
		getSessionsToDelete();
	}, [refresh]);

	
	// const reconfigureTime = (startAirDate, endAirDate) => {
	// let startDate = startAirDate.split('T')[0];
	// let endDate = endAirDate.split('T')[0];
	// let startTime = startAirDate.split('T')[1].split('.')[0];
	// let endTime = endAirDate.split('T')[1].split('.')[0];
	// let dateAndTime = `${startDate}, ${startTime} - ${endDate}, ${endTime}`;
	// return dateAndTime;
	// }


	if (!sessionsToDelete) {
		return <h1>Loading...</h1>;
	}
console.log(sessionsToDelete)
	return (
		<>
			<StaffNavbar />
			{sessionsToDelete.records.map((session) => (
				<section key={session.id}>
					<h2>{session.fields[SessionQuestions.title]}</h2>

					<button
						onClick={() => {
							deleteSession({ id: session.id });
						}}
					>
						Delete
					</button>
				</section>
			))}
		</>
	);
};

export default EditSessions;
