import React from 'react';
import './Form.css'
const Form = (props) => {
    return (
        <div>
            <form >
                <input value={props.value.author} onChange={props.onChangeHandler} className="inpAuthor" name={'author'} type="text" placeholder="Author"/>
                <input value={props.value.message} onChange={props.onChangeHandler} className="inpMess" name={'message'}  type="text" placeholder="Message"/>
            <button onClick={props.post} className="btn">Send</button>
            </form>
        </div>
    );
};

export default Form;