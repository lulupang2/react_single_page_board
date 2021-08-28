import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import logo from '../logo.svg';

function Table() {
    const [number, setNumber] = useState(1);
    const [gogo, setGogo] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = `https://kenken0803.herokuapp.com/getDB?id=${number - 1}&start=${number}`;

    // const url = `http://kenken0803.asuscomm.com:3000/getDB?id=${number - 1}&start=${number}`;
    // const url = `https://kenken0803.asuscomm.com:3030/getDB?id=${number - 1}&start=${number}`;
    // const url = `http://localhost:3030/getDB?id=${number}&start=${number}`;

    const getDB = async () => {
        try {
            const DBlist = await axios.get(url);
            setGogo(DBlist);
            setLoading(false);
        } catch (err) {
            console.log(err);
            alert(err);
            await getDB();
        }
    }

    useEffect(() => {
            getDB();
        }
        , [number]);

    const next = () => {
        setNumber(number + 10);
    }

    const prev = () => {
        if (number < 11) {
            return false;
        }
        setNumber(number - 10);
    }

    return (
        <div className="App">
            {loading ? <img src={logo} className="App-logo" alt="LOADING..."/>
                :
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <td className="App">작성자</td>
                        <td className="App">제목</td>
                        <td className="App">작성일</td>
                    </tr>
                    </thead>
                    <tbody>
                    {gogo.data.map((data, index) => <TableBuilder content={data} key={index}/>)}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td className="App">
                            <button onClick={prev} className="btn btn-light">이전</button>
                        </td>
                        <td className="App">
                            현재 페이지 : {number}
                        </td>
                        <td className="App">
                            <button onClick={next} className="btn btn-light">다음</button>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            }
        </div>
    );
}

function TableBuilder({content}) {
    const chk = () => {
        console.log(content)
    }

    return (

        <tr className="rowrow" onClick={chk}>
            <td className="App">{content.author}</td>
            <td className="App"><Link to={{
                pathname: "/modify",
                state: content
            }}>{content.subject}</Link></td>
            <td className="App">{content.created}</td>
        </tr>
    );
}

export default Table;