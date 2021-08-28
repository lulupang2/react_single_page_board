import './App.css';
import {HashRouter, Route} from "react-router-dom";
import Table from './components/Table';
import Writer from './components/Writer';
import Modify from './components/Modify';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NavBar from "./components/NavBar";
import Location from "./components/Location";


function App() {
    return (
        <HashRouter>
            <Header/>
            <NavBar/>
            <Route path="/" exact={true} component={Table}/>
            <Route path="/writer" component={Writer}/>
            <Route path="/modify" component={Modify}/>
            <Route path="/loc" component={Location}/>
            <Nav/>
            <Footer/>
        </HashRouter>
    )
        ;
}

export default App;
