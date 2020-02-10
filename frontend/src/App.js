import React, {Component} from 'react';
import './App.css';
import Form from "./Componets/Form/Form";
import {connect} from "react-redux";
import {getMessage,postMessage} from "./store/actions/action";
import Message from "./Componets/Message/Message";


class App extends Component {
    state = {
        message: '',
        author: ''
    };

    componentDidMount() {
        this.props.getMessages();
        setInterval(this.props.getMessages, 3000)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.dateTime !== this.props.dateTime || nextProps.error !== this.props.err
    };


    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})

    };
    postSend = (e) => {
        e.preventDefault();
        this.props.postMessage({...this.state});
        this.setState({message:''})
    };

    render() {

        return (
            <div className="App">
                <Form
                    onChangeHandler={this.onChangeHandler}
                    post={this.postSend}
                    value={this.state}
                />
                {this.props.error && <div style={{color:"red"}}>{this.props.error.message}</div>}
                <div className="messWrap">
                {this.props.messages && this.props.messages.map((item) => {
                    return <Message
                    name={item.author}
                    message={item.message}
                    date={item.dateTime}
                    key={item.id}


                    />
                })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages.reverse(),
        dateTime: state.dateTime,
        error: state.error
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        postMessage: (data) => dispatch(postMessage(data)),
        getMessages: () => dispatch(getMessage())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
