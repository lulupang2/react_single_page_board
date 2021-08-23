import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {useEffect, useState} from "react";

function Detail(props){
    return(
        <div className="App">
            <div className='form-wrapper'>
                제목<input className="title-input" type='text' value={props.location.state.subject} />
                Email<input type="text" value={props.location.state.email}/>
                작성자<input type="text" value={props.location.state.author}/>
                <CKEditor
                    editor={ClassicEditor}
                    data={props.location.state.contents}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>패스워드<input type="password" value={props.location.state.password}/><button>전송</button>
        </div>
    )
}

export default Detail;