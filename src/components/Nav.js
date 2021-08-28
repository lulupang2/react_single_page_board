import {Link} from "react-router-dom";

function Nav() {
    return (
        <div className="App">
            <h5><Link to="/"><button className="btn btn-secondary">리스트보기</button></Link>
                &emsp;
                <Link to="/writer"><button className="btn btn-secondary">새 글 쓰기</button></Link>
            </h5>
        </div>
    )
}

export default Nav;