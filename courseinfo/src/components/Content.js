const Content = ({ course }) => {
  let formatedCourse = course.parts.map((part) => (
    <p key={part.id}>
      {part.name} {part.exercises}
    </p>
  ));
  let totalExercises = course.parts.reduce((previous, current) => {
    let newValue = previous + current.exercises;
    return newValue;
  }, 0);
  return (
    <>
      {formatedCourse}
      <p>the total number of exercises is: {totalExercises}</p>
    </>
  );
};

export default Content;