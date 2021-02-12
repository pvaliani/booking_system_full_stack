import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import AppContainer from "./containers/AppContainer"

function App() {

  const [courses, setCourses] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [customer, setCustomers] = useState([]);

  const fetchCourses = () => {
    console.log("fetching courses..")
    const coursesUrl = 'http://localhost:8080/courses'

    fetch(coursesUrl)
    .then(res => res.json())
    .then(data => setCourses(data))
  }

  const fetchBookings = () => {
    console.log("fetching bookings..")
    const bookingsUrl = 'http://localhost:8080/bookings'

    fetch(bookingsUrl)
    .then(res => res.json())
    .then(data => setBookings(data))
  }

  const fetchCustomers = () => {
    console.log("fetching customers..")
    const customersUrl = 'http://localhost:8080/customers'

    fetch(customersUrl)
    .then(res => res.json())
    .then(data => setCustomers(data))
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  useEffect(() => {
    fetchBookings()
  }, [])

  useEffect(() => {
    fetchCustomers()
  }, [])

  
  return (
    <div className="App">
      <p>Front-end</p>
      <AppContainer courses={courses} bookings={bookings} customers={customer}/>
    </div>
  );
}

export default App;