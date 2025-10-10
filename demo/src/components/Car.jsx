function Car({brand='TATA', model, price}){
    return(
        <>
        <h2>Brand: {brand}</h2>
        <p>Model: {model}</p>
        <p>Price: &#8377;{price}</p>
        </>
    )
}

export default Car