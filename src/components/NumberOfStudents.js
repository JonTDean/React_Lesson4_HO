import React, { useState, useEffect } from 'react';

export default function NumberOfStudents(props) {
	const [waitListedStudents, setWaitListedStudents] = useState(0);
	const [enrolledStudents, setEnrolledStudents] = useState(0);

	useEffect(() => {});

	return (
		<div>
			{/* Enrolled Students */}
			<div>
				<h1>Enrolled Students</h1>
				<button onClick={() => setEnrolledStudents(enrolledStudents + 1)}>
					Add 1 Enrolled Student
				</button>
				<h3>Add Multiple Enrolled Students</h3>
				<input
                    name="enrolled"
                    type="button" 
                    onChange={(e) => console.log(e)} 
                />
				<label htmlFor="enrolled">Increase Students</label>
			</div>

			{/* Waitlisted Students */}
			<div>
				<h1>Waitlisted Students</h1>
				<button onClick={() => setWaitListedStudents(waitListedStudents + 1)}>
					Add 1 Waitlisted Student
				</button>
				<h3>Add Multiple Waitlisted Students</h3>
				<input
					name="waitlisted"
					type="button"
					onChange={(e) => console.log(e)}
				/>
				<label htmlFor="waitlisted">Increase Students</label>
			</div>
		</div>
	);
}

function students(studentsAmount) {
	return studentsAmount + 1;
}
