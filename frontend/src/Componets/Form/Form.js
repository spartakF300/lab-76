import React from 'react';
import './Form.css'
const Form = (props) => {
    return (
        <div>
            <form >
                <input onChange={props.onChangeHandler} className="inpAuthor" name={'author'} type="text" placeholder="Author"/>
                <input onChange={props.onChangeHandler} className="inpMess" name={'message'}  type="text" placeholder="Message"/>
            <button onClick={props.post} className="btn">Send</button>
            </form>
        </div>
    );
};

export default Form;