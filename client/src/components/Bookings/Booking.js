const Booking = ({date, course, customer}) => {

    // renders the booking view from date, course and customer objects

    return (
        <div id="info">
            <h3>{date}</h3>
            <p>{course}</p>
            <p>{customer}</p>
        </div>
    )
}

export default Booking;