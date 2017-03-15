/**
 * Created by Eldridge on 3/14/2017.
 */
import React, {Component} from 'react'
import {TextInput} from 'react-native'
import {connect} from 'react-redux'
import {addTodo} from '../actions/actions.js'

class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {text: "Enter TODO here."}
    }

    render() {
        return (
            <TextInput value={this.state.text}
               onChangeText={(text) => {console.log("Change text");this.setState({text})}}
               onSubmitEditing={() =>
               {
                   console.log("Does this call");
                   if(!this.state.text.trim())
                   {
                        return;
                   }
                   this.props.dispatch(addTodo(`\u2022 ${this.state.text}`));
                   console.log(store.getState());
               }}/>

        )
    }
}

AddTodo = connect()(AddTodo);

export default AddTodo