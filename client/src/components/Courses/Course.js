// course Component takes in a course object from the display and then renders the object properties in the view

const Course = ({course}) => {

    // return each parameter from the course object i.e name, location and rating 
    return(
        <div id="info">
            <h3>{course.name}</h3>
            <p>Location: {course.location}</p>
            <p>Rating: {course.rating}</p>
        </div>
    )

}

export default Course;

