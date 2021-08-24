import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {useEffect, useState} from "react";
import Axios from "axios";

function Modify(props) {
    console.log(props);
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
            Axios.post(url1, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json;charset=utf-8"
                },
                'id': Fform.id
            }).then(function (res) {
                window.location.history.back();
                alert(`삭제완료 \n ${res}`);
            }).catch(function (err) {
                alert(err);
            })
        }else {
            return false;
        }
    }

    const submitForm = () => {
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
            window.location.history.back();
            alert(`등록완료 \n ${res}`);
        }).catch(function (err) {
            alert(err);
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
                Email:<input type="text" defaultValue={props.location.state.email} onChange={getEmail}/>
                작성자:<input type="text" defaultValue={props.location.state.author} onChange={getAuthor}/>
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
            패스워드<input type="password" onChange={getPassword}/><br/>
            <button onClick={deleteDB}>삭제하기</button>
            <button onClick={submitForm}>전송하기</button>
        </div>
    )
}

export default Modify;