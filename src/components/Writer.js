import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Axios from 'axios';
import {useState} from "react";
import {useHistory} from "react-router-dom";
import logo from '../logo.svg';

function Writer() {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [Fform, setFform] = useState({
        author: '',
        email: '',
        subject: '',
        contents: '',
        password: '',
    })

    const url = `https://kenken0803.herokuapp.com/insertDB`;

    // const url = `https://kenken0803.asuscomm.com:3030/insertDB`;

    // const url = `http://localhost:3030/insertDB`;

    const submitForm = () => {
        setLoading(false);
        Axios.post(url, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json;charset=utf-8"
            },
            'author': Fform.author,
            'email': Fform.email,
            'subject': Fform.subject,
            'contents': Fform.contents,
            'password': Fform.password,
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
                <input className="title-input" type='text' placeholder="제목"  onChange={getTitle}/><br/>
                <input type="text"  placeholder="이메일"  onChange={getEmail}/>&emsp;
                <input type="text" placeholder="작성자" onChange={getAuthor}/>
                <CKEditor
                    editor={ClassicEditor}
                    data=""
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
            <input type="password" placeholder="password" onChange={getPassword}/>&emsp;
            {loading ? <button onClick={submitForm} className="btn btn-primary">전송!</button>
                : <img src={logo} className="App-logo" alt="LOADING..."/>}
        </div>
    )
}

export default Writer;