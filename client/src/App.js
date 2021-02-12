import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import AppContainer from "./containers/AppContainer"

function App() {

  // create useStates for each of course, booking and customers so that the browserr
  // will refresh state upon an alteration to them

  const [courses, setCourses] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [customer, setCustomers] = useState([]);

  // perform a fetch for courses

  const fetchCourses = () => {
    console.log("fetching the courses..")
    const coursesUrl = 'http://localhost:8080/courses'

    // fetch via course url and convert the promise object from a bit stream to usable json

    fetch(coursesUrl)
    .then(res => res.json())
    .then(data => setCourses(data))
  }


// perform a fetch for bookings 

  const fetchBookings = () => {
    console.log("fetching the bookings..")
    const bookingsUrl = 'http://localhost:8080/bookings'

    // fetch via course url and convert the promise object from a bit stream to usable json

    fetch(bookingsUrl)
    .then(res => res.json())
    .then(data => setBookings(data))
  }

  // perform a fetch for customers

  const fetchCustomers = () => {
    console.log("fetching the customers..")
    const customersUrl = 'http://localhost:8080/customers'

      // fetch via course url and convert the promise object from a bit stream to usable json

    fetch(customersUrl)
    .then(res => res.json())
    .then(data => setCustomers(data))
  }

// invoke useEffect for the fetched courses, bookings and customers - the useEffect hook will invoke the fetching of each data type consumed on the API

  useEffect(() => {
    fetchCourses()
  }, [])

  useEffect(() => {
    fetchBookings()
  }, [])

  useEffect(() => {
    fetchCustomers()
  }, [])

  // return the consumed back end API data to the front end AppContainer component - we define this data in the useState of the app on lines 11-13
  
  return (
    <div className="App">
      <p>Front-end</p>
      <AppContainer courses={courses} bookings={bookings} customers={customer}/>
    </div>
  );
}

export default App;