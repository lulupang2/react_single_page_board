import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Table() {
    const [number, setNumber] = useState(1);
    const [gogo, setGogo] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = `http://kenken0803.asuscomm.com:3030/getDB?id=${number-1}&start=${number}`;
    // const url = `http://localhost:3030/getDB?id=${number}&start=${number}`;

    const getDB = async () => {
        const DBlist = await axios.get(url);
        setGogo(DBlist);
        setLoading(false);
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
        <>
            <table>
                <thead>
                <tr>
                    <td>작성자</td>
                    <td>제목</td>
                    <td>작성일</td>
                </tr>
                </thead>
                <tbody>
                {loading ? "LOADING" : gogo.data.map((data, index) => <TableBuilder content={data} key={index}/>)}
                </tbody>
                <tfoot>
                <tr>
                    <td>
                        <button onClick={prev}>이전</button>
                    </td>
                    <td>
                        현재 페이지 : {number}
                    </td>
                    <td>
                        <button onClick={next}>다음</button>
                    </td>
                </tr>
                </tfoot>
            </table>
        </>
    );
}

function TableBuilder({content}) {
    // const chk = () => {
    //     console.log(content)
    // }

    return (

        <tr className="rowrow">
            <td>{content.author}</td>
            <td><Link to={{
                pathname: "/modify",
                state: content
            }}>{content.subject}</Link></td>
            <td>{content.created}</td>
        </tr>

    );
}

export default Table;