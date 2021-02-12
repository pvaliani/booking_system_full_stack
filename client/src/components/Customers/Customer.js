// course Component takes in a course object

const Customer = ({customer}) => {

    // return each parameter from the course object i.e name, location and rating 
    return(
        <div id="info">
            <h3>{customer.name}</h3>
            <p>Location: {customer.town}</p>
            <p>Age: {customer.age}</p>
        </div>
    )

}

export default Customer;