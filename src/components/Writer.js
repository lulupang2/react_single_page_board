import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Axios from 'axios';
import {useState} from "react";

function Writer() {
    const [Fform, setFform] = useState({
        author: '',
        email: '',
        subject: '',
        contents: '',
        password: '',
    })

    const url = `https://kenken0803.asuscomm.com:3030/insertDB`;
    // const url = `http://localhost:3030/insertDB`;

    const submitForm = () => {
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
        }).then(alert('등록완료'));
    }
    const getTitle = e => {
        const { name, value } = e.target;
        setFform({
            ...Fform,
            'subject': value
        })
        console.log(Fform.subject);
    };

    const getEmail = e => {
        const { name, value } = e.target;
        setFform({
            ...Fform,
            'email': value
        })
        console.log(Fform.email);
    };

    const getAuthor = e => {
        const { name, value } = e.target;
        setFform({
            ...Fform,
            'author': value
        })
        console.log(Fform.author);
    };

    const getPassword = e => {
        const { name, value } = e.target;
        setFform({
            ...Fform,
            'password': value
        })
        console.log(Fform.password);
    };

    return (
        <div className="App">
            <div className='form-wrapper'>
                제목<input className="title-input" type='text' onChange={getTitle}/><br/>
                Email<input type="text" onChange={getEmail}/>
                작성자<input type="text" onChange={getAuthor}/>
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
            패스워드<input type="password" onChange={getPassword}/><br/>
            <button onClick={submitForm}>전송</button>
        </div>
    )
}

export default Writer;