import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {useState} from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";
import logo from "../logo.svg";

function Modify(props) {
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const [Fform, setFform] = useState({
        author: props.location.state.author,
        email: props.location.state.email,
        subject: props.location.state.subject,
        contents: props.location.state.contents,
        password: props.location.state.password,
        id: props.location.state.id
    })

    const url1 = `https://kenken0803.herokuapp.com/deleteDB`
    const url2 = `https://kenken0803.herokuapp.com/updateDB`

    // const url1 = `https://kenken0803.asuscomm.com:3030/deleteDB`;
    // const url2 = `https://kenken0803.asuscomm.com:3030/updateDB`;

    // const url1 = `http://localhost:3030/deleteDB`;
    // const url2 = `http://localhost:3030/insertDB`;

    const deleteDB = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            setLoading(false);
            Axios.post(url1, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json;charset=utf-8"
                },
                'id': Fform.id
            }).then(function (res) {
                if (res.data === "success") {
                    history.push('/');
                    alert('성공');
                }
            }).catch(function (err) {
                alert(err);
                setLoading(true);
            })
        } else {
            return false;
        }
    }

    const submitForm = () => {
        setLoading(false);
        Axios.post(url2, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json;charset=utf-8"
            },
            'author': Fform.author,
            'email': Fform.email,
            'subject': Fform.subject,
            'contents': Fform.contents,
            'password': Fform.password,
            'id': Fform.id
        }).then(function (res) {
            if (res.data === "success") {
                history.push('/');
                alert('성공');
            }
        }).catch(function (err) {
            alert(err);
            setLoading(true);
        })
    }
    const getTitle = e => {
        const {name, value} = e.target;
        setFform({
            ...Fform,
            'subject': value
        })
        console.log(Fform.subject);
    };

    const getEmail = e => {
        const {name, value} = e.target;
        setFform({
            ...Fform,
            'email': value
        })
        console.log(Fform.email);
    };

    const getAuthor = e => {
        const {name, value} = e.target;
        setFform({
            ...Fform,
            'author': value
        })
        console.log(Fform.author);
    };

    const getPassword = e => {
        const {name, value} = e.target;
        setFform({
            ...Fform,
            'password': value
        })
        console.log(Fform.password);
    };

    return (
        <div className="App">
            <div className='form-wrapper'>
                <input className="title-input" type='text' defaultValue={props.location.state.subject}
                       onChange={getTitle}/><br/>
                <input type="text" defaultValue={props.location.state.email} onChange={getEmail}/>&emsp;
                <input type="text" defaultValue={props.location.state.author} onChange={getAuthor}/>
                <CKEditor
                    editor={ClassicEditor}
                    data={props.location.state.contents}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        // console.log({ event, editor, data });
                        setFform({
                            ...Fform,
                            'contents': data
                        })
                        console.log(Fform.contents);
                    }}
                />
            </div>
            <input type="password" placeholder="password" onChange={getPassword}/><br/>
            {loading ? <>
                    <button onClick={deleteDB} className="btn btn-danger">삭제하기</button>&emsp;
                    <button onClick={submitForm} className="btn btn-primary">전송하기</button>
                </>
                : <img src={logo} className="App-logo" alt="LOADING..."/>}
        </div>
    )
}

export default Modify;