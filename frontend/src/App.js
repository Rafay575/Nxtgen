import logo from './logo.svg';
import './App.css';
import Stepper from './Components/Stepper';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Page/Home';

function App() {
  const divStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/Poster.jpg"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    width: '100%',
    minHeight: '100vh',
  };

  return (
    <>
      <div >
        <Home />
      </div>
    </>
  );
}

export default App;
