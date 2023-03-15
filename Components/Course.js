import CourseHead from "./CourseHead";
import CourseName from "./CourseName";
import CourseParts from "./CourseParts";
import TotalCount from "./TotalCount";

const Course = ({courses}) => {

    return(
        <div>
           {courses.map((subject)=>{
            <div>
            console.log(subject['name']);
            <CourseName name={subject['name']} />
            </div>
           })}
        </div>
    )

}

export default Course