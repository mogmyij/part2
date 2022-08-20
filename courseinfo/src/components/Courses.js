import Course from "./Course";

const Courses = ({ courses }) => {
  let courseList = courses.map((course) => (
    <Course key={course.id} course={course} />
  ));

  return <div>{courseList}</div>
};

export default Courses;