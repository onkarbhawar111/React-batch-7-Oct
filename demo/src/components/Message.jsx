
function Message({onShow}){
    return(
        <button onClick={() => onShow("Hello from Child. !!!!!!!")}>Click Me</button>
    )
}

export default Message