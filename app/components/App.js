/**
 * Created by Eldridge on 3/14/2017.
 */
import React from 'react'
import Footer from './Footer'
import {View} from 'react-native'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends React.Component {
    render(){
    return (
        <View>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </View>)
    }
}
//

export default App