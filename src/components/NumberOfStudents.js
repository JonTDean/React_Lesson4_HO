import React, { useState, useEffect } from 'react';

export default function NumberOfStudents(props) {
	const [waitListedStudents, setWaitListedStudents] = useState(0);
	const [enrolledStudents, setEnrolledStudents] = useState(0);
	const [nEnrolledStudents, setNEnrolledStudents] = useState(0);
	const [nWaitListedStudents, setNWaitListedStudents] = useState(0);

	function submitCheck(e) {
		// console.log(e.target.value);
		e.preventDefault();
	}

	function increaseNStudents(
		e,
		getStudentType,
		setStudentType,
		getNStudents,
		setNStudents
	) {
		setStudentType(getStudentType + getNStudents);
		setNStudents(0);
	}

	function handleNStudents(e, getNStudents, setNStudents) {
		setNStudents(parseInt(e.target.value));
		console.log(`N STUDENTS: ${getNStudents}`);
	}

	return (
		<div>
			{/* Enrolled Students */}
			<div>
				<h1>Enrolled Students: {enrolledStudents}</h1>
				<button onClick={() => setEnrolledStudents(enrolledStudents + 1)}>
					Add 1 Enrolled Student
				</button>
				<h3>Add Multiple Enrolled Students</h3>
				<form onSubmit={(e) => submitCheck(e)}>
					<label htmlFor="enrolled">Increase Students:</label>
					<br />
					<input
						name="enrolled"
						defaultValue={0}
						value={nEnrolledStudents}
						onChange={(e) =>
							handleNStudents(e, nEnrolledStudents, setNEnrolledStudents)
						}
					/>
					<input
						type="submit"
						value="Submit"
						onClick={(e) =>
							increaseNStudents(
								e,
								enrolledStudents,
								setEnrolledStudents,
								nEnrolledStudents,
								setNEnrolledStudents
							)
						}
					/>
				</form>
			</div>

			{/* Waitlisted Students */}
			<div>
				<h1>Waitlisted Students: {waitListedStudents}</h1>
				<button onClick={() => setWaitListedStudents(waitListedStudents + 1)}>
					Add 1 Waitlisted Student
				</button>
				<h3>Add Multiple Waitlisted Students</h3>
				<form onSubmit={submitCheck}>
					<label htmlFor="waitlisted">Increase Students </label>
					<br />
					<input
						name="waitlisted"
						defaultValue={0}
						value={nWaitListedStudents}
						onChange={(e) =>
							handleNStudents(e, nWaitListedStudents, setNWaitListedStudents)
						}
					/>
					<input
						type="submit"
						value="Submit"
						onClick={(e) =>
							increaseNStudents(
								e,
								waitListedStudents,
								setWaitListedStudents,
								nWaitListedStudents,
								setNWaitListedStudents
							)
						}
					/>
				</form>
			</div>
		</div>
	);
}
