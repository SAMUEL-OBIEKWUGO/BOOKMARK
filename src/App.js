import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Features from './Component/Features';
import Simple from './Component/Simple';
import Click from './Component/Click';
import Extension from './Component/Extension';
import Questions from './Component/Questions';
 import Main from './Component/Main'
import Footer from './Component/Footer';

function App() {
  return (
    <>
   <Navbar/> 
   <Hero/>
   <Features/>
   <Simple/>
   <Click/>
   <Extension/>
   <Questions/>
    <Main/>
   <Footer/> 
    </>
  );
}

export default App;
