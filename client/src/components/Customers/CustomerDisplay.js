
import Customer from "./Customer"

const CustomerDisplay = ({customers}) => {

    const customerList = customers.map((customer) => {

        return (
            <Customer 
                customer={customer}
                key={customer.id} />
        )
    })

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