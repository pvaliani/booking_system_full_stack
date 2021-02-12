// import the customer component
import Customer from "./Customer"

// take in customer objects
const CustomerDisplay = ({customers}) => {

    // map each customer object to a list and return the customer object and its id to the customer component 

    const customerList = customers.map((customer) => {

        return (
            <Customer 
                customer={customer}
                key={customer.id} />
        )
    })

    // return the mapped customer list to customer component so that the view can be generated on the front end

    return (
        <>
            <h2>Customers</h2>
            <ul id="list">
                {customerList}
            </ul>
        </>
    )
}

// DONT FORGET TO EXPORT!!
export default CustomerDisplay;