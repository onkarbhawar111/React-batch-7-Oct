function Button({color='blue', label='Submit'}){
    return(
        <>
        <button style={{backgroundColor:color}}>{label}</button>
        </>
    )
}

export default Button