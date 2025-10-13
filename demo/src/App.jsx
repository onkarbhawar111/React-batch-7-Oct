import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainBody from "./components/MainBody.jsx";
import OfferLetter from "./components/OfferLetter.jsx";
import NewComponent from "./components/NewComponent.jsx";
import Student from "./components/Student.jsx";
import Message from "./components/Message.jsx";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";
import Car from "./components/Car.jsx";
import CompA from "./components/CompA.jsx";
import UserGreeting from "./components/UserGreeting.jsx";

function App() {
  // const showMessage = (msg) => {
  //   alert("Message from child: ", msg);
  // };

  // function showMessage(msg){
  //    alert(`Message from child: , ${msg}`);
  //   // console.log("Message from child: ", msg)
  // }
  // return <Message onShow={showMessage} />

  // return(
  //   <>
  //   <Card>
  //     <h2>This is inside a card....</h2>
  //     <p>Using children props to render content.</p>
  //   </Card>
  //   <p>Outside Card Comp.....</p>
  //   </>
  // )

  const compName = "Bajaj";
  const isLoggedIn = false;
  const isAdmin = false;

  let greeting; 
  const isMorning = false;

  {    /* Conditional Rendering using if else.... inside fn*/  }
  if (isMorning) {
    greeting = "Good Morning"
  } else {
    greeting = "Good Evening"
  }
  return (
    <>
      {/* <Button label="Search" color="red"/>
    <Button /> */}
      {/* <Car brand='Mahindra' model='ScorpioN' price="25lkh"  />
    <Car brand={compName} model='Harrier' price='22lkh' />
    <Car brand='Force' model="Cruiser" price="15lkh" /> */}

      {/* <UserGreeting isLoggedIn={isLoggedIn} /> */}

      {/* Conditional Rendering using ternary opr */}
      {/* <div>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please Login !!</h2>}
    </div> */}

      {/* Conditional Rendering using logical AND opr*/}
      {/* <div>
        <h2>Welcome to the Dashboard</h2>
        {isAdmin && <button>Manage Users</button>}
      </div> */}

      <h2>{greeting}</h2>
    </>
  );
}

export default App;

// function add(a, b){

// return a+b
// }

// add(2, 3)
// add(8, 4)
