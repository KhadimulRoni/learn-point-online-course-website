import './App.css';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './components/AboutUs/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">

      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>



      
 
    </div>
  );
}

export default App;
