/**
 * Created by Eldridge on 3/14/2017.
 */
import React, {PropTypes} from 'react'
import {Text, StyleSheet} from 'react-native'
class Todo extends React.Component {

    render() {
        return (
            <Text onPress={this.props.onClick} style={[style.todoItem, {textDecorationLine: this.props.completed ? 'line-through' : 'none'}]}>
                {this.props.text}
            </Text>);
    }
}

const style = StyleSheet.create({
    todoItem:
        {
            fontSize: 20,
            color: "black",
            paddingLeft: 16,
            borderWidth: 2,
            marginBottom: 4
        }
});
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo