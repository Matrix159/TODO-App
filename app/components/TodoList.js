/**
 * Created by Eldridge on 3/14/2017.
 */
import React, {PropTypes} from 'react'
import Todo from './Todo'
import {ListView, StyleSheet, View} from 'react-native'
class TodoList extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex:4}}>
            <ListView  dataSource={this.props.dataSource} renderRow={(rowData) => <Todo {...rowData}
            onClick={() => {
                this.props.onTodoClick(rowData.id);
            }}/>}/></View>)}

}
const styles = StyleSheet.create({
    listView: {
        flex: 1,
        justifyContent: 'center',
    },
});
/*{props.todos.map(todo =>
 <Todo
 {...todo}
 onClick={() => {
 props.onTodoClick(todo.id);
 this.setState({
 dataSource: this.state.dataSource.cloneWithRows(this.props.todos)
 });
 }}
 />
 )}*
 TodoList.propTypes = {
 todos: PropTypes.arrayOf(PropTypes.shape({
 id: PropTypes.number.isRequired,
 completed: PropTypes.bool.isRequired,
 text: PropTypes.string.isRequired
 }).isRequired).isRequired,
 onTodoClick: PropTypes.func.isRequired
 };
*/

export default TodoList;