import Content from "./Content"
import Header from "./Header"

const Course=({course})=>(
<>
<Header courseName={course.name}></Header> 
<Content course={course}></Content>
</>
)
    
export default Course