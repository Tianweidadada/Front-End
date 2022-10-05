const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  let content = props.content;
  return (
    <>
      <Part name={content[0].name} exercises={content[0].exercises} />
      <Part
        name={content[1].name.part2}
        exercises={content[1].exercises.exercises2}
      />
      <Part
        name={content[2].name.part3}
        exercises={content[2].exercises.exercises3}
      />
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} : {props.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {parseInt(props.exercises1) +
          parseInt(props.exercises2) +
          parseInt(props.exercises3)}
      </p>
    </>
  );
};

const CourseInfo = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  // There is a different behavior between pass by a const value and variable to componet
  // When passed by a const value , it can be accessed name by content[0].name and content[0].exercises
  // Howerver, when passed by reference (like {part1}) , variables name is required to reference its concrete
  // value (content[1].name.part2 and content[1].exercises.exercises2 in this example)

  const exe_infos = [
    { name: "Fundamentals of React", exercises: "10" },
    { name: { part2 }, exercises: { exercises2 } },
    { name: { part3 }, exercises: { exercises3 } },
  ];

  return (
    <div>
      <Header course="Half Stack application development" />
      <Content content={exe_infos} />
      <Total exercises1="10" exercises2="7" exercises3="14" />
    </div>
  );
};

export default CourseInfo;
