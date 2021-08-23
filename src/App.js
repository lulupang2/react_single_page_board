import './App.css';
import {useEffect, useState} from "react";
import {HashRouter, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Table from './components/Table';
import Writer from './components/Writer';
import Modify from './components/Modify';


function Header() {
  return (
      <h1 className="header">헤더영역</h1>
  )
}

function Nav() {
  return (
      <div className="App">
        <Link to="/">리스트</Link> <Link to="/writer">글쓰기</Link>
      </div>
  )
}

function Footer() {
  return (
      <h4 className="footer">풋터 영역</h4>
  )
}

function App() {
  const [page, setPage] = useState(0);
  return (
      <HashRouter>
        <Header/>
        <Nav/>
        <Route path="/" exact={true} component={Table}/>
        <Route path="/writer" component={Writer}/>
        <Route path="/modify" component={Modify}/>
        <Footer/>
      </HashRouter>
  )
      ;
}

export default App;
