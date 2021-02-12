import Customer from "./Customer"
// import the customer component

// take in customer objects and map each one to a list returning the customer component with the id and customer object 

const CustomerDisplay = ({customers}) => {


    // create a list of customer of objects via a map 
    
    const customerList = customers.map((customer) => {

        return (
            <Customer 
                customer={customer}
                key={customer.id} />
        )
    })

    // return the mapped customer list here to be handled in the display view

    return (
        <>
            <h2>Customers</h2>
            <ul id="list">
                {customerList}
            </ul>
        </>
    )
}

export default CustomerDisplay;




