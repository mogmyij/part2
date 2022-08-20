const Content=({course})=>{
let formatedCourse=course.parts.map(part=><p key={part.id}> {part.name} {part.exercises}</p>)
return(
    <>
    {formatedCourse}
    </>
)    
}

export default Content