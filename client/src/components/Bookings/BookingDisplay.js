import Booking from "../Bookings/Booking"

const BookingDisplay = ({bookings}) => {

    // map bookings to a booking list 
    const bookingList = bookings.map((booking, index) => {

        return (
            <Booking 
                date={booking.date}
                course={booking.course.name}
                customer={booking.customer.name}
                key={booking.id} />
        )
    })

    // React needs to return something - return the bookinglist view to the front end
    return(
        <div>
            <h2>Bookings List</h2>
            <ul id="list">
                {bookingList}
            </ul>
        </div>
    )

}

export default BookingDisplay;