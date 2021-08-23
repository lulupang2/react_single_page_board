import {Link} from "react-router-dom";
function Nav() {
    return (
        <div className="App">
            <Link to="/">리스트보기</Link> &emsp;
            <Link to="/writer">새 글 쓰기</Link>
        </div>
    )
}

export default Nav;