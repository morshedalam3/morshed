import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';



function App() {
  return (
    <>
    <Home/>
    <Footer/>
    <MessengerCustomerChat
    pageId="109406980880174"
    appId="200380748524202"
  />
    </>
  );
}

export default App;
