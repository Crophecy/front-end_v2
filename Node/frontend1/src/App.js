import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Nav} from './components/Header'
import {C2,C3} from './components/C1'
import {Footer} from './components/Footer'
function App() {
  return (
    <div>
      <h1>hiiii</h1>
      <Header />
      <Nav />
      <C2 prodName="t-shirt" color="blue" price="400"/>
      <C2 prodName="Shoes" color="white" price="200"/>
      <C2 prodName="watch" color="Black" price="500"/>
     
      <Footer personName = "Raj" age="23" role = "Trainer" />
    </div>
  );
}

export default App;
