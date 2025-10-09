import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MainBody from './components/MainBody.jsx';
import OfferLetter from './components/OfferLetter.jsx';
import NewComponent from './components/NewComponent.jsx';

function App() {

  const firstName = "Suraj"
  return (
    <>
      <OfferLetter fname={firstName} age={22} />
    <NewComponent name="Header" />
    <NewComponent name='Footer' />
    <NewComponent age={22} />

    </>
  );
}

export default App;


// function add(a, b){

// }

// add(5, 7)