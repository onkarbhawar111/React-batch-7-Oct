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


  return(
    <>
    {/* <Button label="Search" color="red"/>
    <Button /> */}
    <Car brand='Mahindra' model="ScorpioN" price="25lkh" />
    <Car model='Harrier' price="22lkh" />
    <Car brand='Force' model="Cruiser" price="15lkh" />
    </>
  )
}

export default App;
