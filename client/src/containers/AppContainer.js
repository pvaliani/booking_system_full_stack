import CourseDisplay from "../components/Course/CourseDisplay"
import BookingDisplay from "../components/Bookings/BookingDisplay"
import CustomerDisplay from "../components/Customers/CustomerDisplay"
import "./AppContainer.css"


const AppContainer = ({bookings, courses, customers}) => {

    return(
        <div>
            <h1>App Container</h1>
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