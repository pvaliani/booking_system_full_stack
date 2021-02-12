import Course from "./Course"

// arrow function takes in courses from course component

const CourseDisplay = ({courses}) => {

    const courseList = courses.map(() => {

        // React component has to return something i.e course component via course id
   
        return(
            <Course course={course} key={course.id}/>
        )
    })

    // create fragments to allow multiple JSX elements. In this case we return the courses as a header along with courseList which is the mapped courses
    return(
        <>
            <h2>Courses</h2>
            <ul id="list">
                {courseList}
            </ul>
        
        </>


    )

  

    }

    export default CourseDisplay;
 

