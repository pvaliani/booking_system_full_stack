import CourseDisplay from "../components/Courses/CourseDisplay"
import BookingDisplay from "../components/Bookings/BookingDisplay"
import CustomerDisplay from "../components/Customers/CustomerDisplay"
import "./AppContainer.css"


// returns course display, booking display and customer display to the front end. These components have the course, booking and customer components threaded into them with all the details of a booking 

const AppContainer = ({bookings, courses, customers}) => {

    return(
        <div>
            <h1>The App Container</h1>
            <div className="app-list">
                <div className="courses">
                    <CourseDisplay courses={courses}/>
                </div>
                <div className="bookings">
                    <BookingDisplay bookings={bookings}/>
                </div>
                <div className="customers">
                    <CustomerDisplay customers={customers}/>
                </div>
            </div>
        </div>
    )
}

export default AppContainer;