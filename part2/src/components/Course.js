const Course = ({ course }) => {
	return (
		<div>
			<Header course_name={course.name} />
			<Content parts={course.parts} />
			<Sum parts={course.parts} />
		</div>
	);
};

const Header = ({ course_name }) => {
	return <h1>{course_name}</h1>;
};

const Content = ({ parts }) => {
	return (
		<>
			{parts.map((part) => (
				<Part key={part.id} part={part} />
			))}
		</>
	);
};

const Part = ({ part }) => {
	return (
		<p>
			{part.name} {part.exercises}
		</p>
	);
};

const Sum = ({ parts }) => {
	const sum = parts
		.map((part) => part.exercises)
		.reduce((partialSum, a) => partialSum + a, 0);
	return <b>total of {sum} exercises</b>;
};

export default Course;
