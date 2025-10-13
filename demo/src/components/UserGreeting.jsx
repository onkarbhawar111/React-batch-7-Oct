function UserGreeting({isLoggedIn}){
    

    if({isLoggedIn}){
        return <h2>Welcome back!</h2>
    } else{
        return <h2>Please Login</h2>
    }

}

export default UserGreeting